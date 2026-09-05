import type { ReactNode } from "react"
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  type TargetAndTransition,
} from "framer-motion"

// ─── Spring config ─────────────────────────────────────────────────────────────
const SPRING = { stiffness: 200, damping: 22, bounce: 0.2 }

// ─── useMeasure (native ResizeObserver — no extra dep) ────────────────────────
function useMeasure(): [React.RefCallback<HTMLElement>, { height: number; width: number }] {
  const [size, setSize] = useState({ height: 0, width: 0 })
  const observerRef = useRef<ResizeObserver | null>(null)

  const ref = useCallback((node: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    if (!node) return
    observerRef.current = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    observerRef.current.observe(node)
  }, [])

  return [ref, size]
}

// ─── Context ───────────────────────────────────────────────────────────────────
interface ExpandableCtx {
  isExpanded: boolean
  toggleExpand: () => void
  transitionDuration: number
  easeType: string | number[]
}

const ExpandableContext = createContext<ExpandableCtx>({
  isExpanded: false,
  toggleExpand: () => {},
  transitionDuration: 0.35,
  easeType: "easeInOut",
})

const useExpandable = () => useContext(ExpandableContext)

// ─── Expandable root ──────────────────────────────────────────────────────────
interface ExpandableProps {
  children: ReactNode | ((p: { isExpanded: boolean }) => ReactNode)
  expanded?: boolean
  onToggle?: () => void
  transitionDuration?: number
  easeType?: string | number[]
  expandDirection?: string
  className?: string
  style?: React.CSSProperties
}

export function Expandable({
  children,
  expanded,
  onToggle,
  transitionDuration = 0.35,
  easeType = "easeInOut",
  className,
  style,
}: ExpandableProps) {
  const [internal, setInternal] = useState(false)
  const isExpanded = expanded !== undefined ? expanded : internal
  const toggleExpand = onToggle ?? (() => setInternal(p => !p))

  return (
    <ExpandableContext.Provider value={{ isExpanded, toggleExpand, transitionDuration, easeType }}>
      <div className={className} style={style}>
        {typeof children === "function" ? children({ isExpanded }) : children}
      </div>
    </ExpandableContext.Provider>
  )
}

// ─── Animation presets ────────────────────────────────────────────────────────
type Preset = "fade" | "slide-up" | "slide-down" | "scale" | "blur-sm"

const PRESETS: Record<Preset, { initial: TargetAndTransition; animate: TargetAndTransition; exit: TargetAndTransition }> = {
  fade:        { initial: { opacity: 0 },                       animate: { opacity: 1 },                       exit: { opacity: 0 } },
  "slide-up":  { initial: { opacity: 0, y: 16 },               animate: { opacity: 1, y: 0 },                exit: { opacity: 0, y: 16 } },
  "slide-down":{ initial: { opacity: 0, y: -16 },              animate: { opacity: 1, y: 0 },                exit: { opacity: 0, y: -16 } },
  scale:       { initial: { opacity: 0, scale: 0.92 },          animate: { opacity: 1, scale: 1 },             exit: { opacity: 0, scale: 0.92 } },
  "blur-sm":   { initial: { opacity: 0, filter: "blur(6px)" }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: "blur(6px)" } },
}

// ─── ExpandableContent ────────────────────────────────────────────────────────
interface ExpandableContentProps {
  children: ReactNode
  preset?: Preset
  keepMounted?: boolean
  className?: string
}

export function ExpandableContent({ children, preset = "slide-up", keepMounted = false, className }: ExpandableContentProps) {
  const { isExpanded, transitionDuration, easeType } = useExpandable()
  const [measureRef, { height }] = useMeasure()
  const animH = useMotionValue(0)
  const smoothH = useSpring(animH, SPRING)

  useEffect(() => {
    animH.set(isExpanded ? height : 0)
  }, [isExpanded, height, animH])

  const anim = PRESETS[preset]

  return (
    <motion.div style={{ height: smoothH, overflow: "hidden" }} className={className}>
      <AnimatePresence initial={false}>
        {(isExpanded || keepMounted) && (
          <motion.div
            ref={measureRef as any}
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{ duration: transitionDuration, ease: easeType as any }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
