import * as React from "react"
import { useEffect, useState } from "react"
import { motion, type AnimationOptions, type Variants } from "framer-motion"

type Props = {
  texts: string[]
  prefix?: string
  ease?: AnimationOptions
  deleteSpeed?: number
  showCursor?: boolean
  hideCursorOnType?: boolean
  cursorChar?: string
  cursorAnimationVariants?: Variants
  font?: Record<string, any>
  color?: string
  typedColor?: string
  cursorColor?: string
  style?: React.CSSProperties
  className?: string
}

const DEFAULTS: Required<Omit<Props, 'cursorAnimationVariants' | 'style' | 'className'>> = {
  prefix: "",
  color: "#0f172a",
  texts: ["results.", "negócios.", "o futuro.", "times."],
  typedColor: "#1E50FF",
  ease: { type: "tween", duration: 0.07, delay: 1.8, ease: "easeInOut" } as any,
  deleteSpeed: 0.06,
  showCursor: true,
  hideCursorOnType: false,
  cursorChar: "_",
  cursorColor: "",
  font: {
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    lineHeight: "1",
  },
}

export function Typewriter(props: Props) {
  const merged = { ...DEFAULTS, ...props }
  const {
    texts, prefix, ease, deleteSpeed, showCursor,
    hideCursorOnType, cursorChar, cursorAnimationVariants: cursorVariantsProp,
    font, color, typedColor, cursorColor, style, className,
  } = merged

  const typeDelayMs  = Math.max(0, ((ease as any)?.duration ?? 0.07) * 1000)
  const holdMs       = Math.max(0, ((ease as any)?.delay   ?? 1.8)   * 1000)
  const deleteDelayMs = Math.max(0, (deleteSpeed ?? 0.06) * 1000)

  const list: string[] = (texts ?? []).filter((t): t is string => typeof t === "string")
  const hasTexts = list.length > 0

  const [displayText, setDisplayText]       = useState("")
  const [currentIndex, setCurrentIndex]     = useState(0)
  const [isDeleting, setIsDeleting]         = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // State machine
  useEffect(() => {
    if (!hasTexts) return
    let timeout: ReturnType<typeof setTimeout> | undefined
    const currentText = list[currentTextIndex] ?? ""

    const tick = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % list.length)
          setCurrentIndex(0)
        } else {
          timeout = setTimeout(
            () => setDisplayText(prev => prev.slice(0, -1)),
            deleteDelayMs
          )
        }
      } else {
        if (currentIndex < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText(prev => prev + currentText[currentIndex])
            setCurrentIndex(prev => prev + 1)
          }, typeDelayMs)
        } else if (list.length > 1) {
          timeout = setTimeout(() => setIsDeleting(true), holdMs)
        }
      }
    }

    tick()
    return () => { if (timeout) clearTimeout(timeout) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, displayText, isDeleting, typeDelayMs, deleteDelayMs, holdMs, currentTextIndex, hasTexts])

  // Reset when texts change
  const textsKey = list.join("")
  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setIsDeleting(false)
    setCurrentTextIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textsKey])

  const cursorVariants: Variants = cursorVariantsProp ?? {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.01, repeat: Infinity, repeatDelay: 0.45, repeatType: "reverse" },
    },
  }

  const currentText = list[currentTextIndex] ?? ""
  const isActivelyTyping = hasTexts && (isDeleting || (currentIndex > 0 && currentIndex < currentText.length))
  const cursorHidden = hideCursorOnType && isActivelyTyping
  const resolvedCursorColor = cursorColor && cursorColor !== "" ? cursorColor : typedColor

  const { textAlign: _ignored, ...fontCss } = font as any

  return (
    <span
      style={{ display: "inline", whiteSpace: "pre-wrap", ...fontCss, color, ...style }}
      className={className}
    >
      {prefix ? <span>{prefix}</span> : null}
      <span style={{ color: typedColor }}>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          initial="initial"
          animate="animate"
          style={{
            color: resolvedCursorColor,
            marginLeft: "0.05em",
            visibility: cursorHidden ? "hidden" : "visible",
          }}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
}
