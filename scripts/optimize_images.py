from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]

IMAGES = {
    "src/assets/members/felix_foto.png": ((900, 1100), 84, False),
    "src/assets/members/hyago_foto.png": ((900, 1100), 84, False),
    "src/assets/members/kenzo_foto.png": ((900, 1100), 84, False),
    "src/assets/members/arthur_foto.png": ((1000, 1000), 84, False),
    "src/assets/robot/robot_acenando (1).png": ((1004, 1004), 88, False),
    "src/assets/robot/robot_chat.png": ((1000, 1000), 88, False),
    "src/assets/robot/robot_ideia.png": ((1000, 1000), 88, False),
    "src/assets/robot/robot_notebook.png": ((1200, 1200), 88, False),
    "src/assets/robot/robo_erro404.png": ((1200, 1200), 88, False),
    "src/assets/logo/profit_Plogo_branca.png": ((256, 256), 100, True),
    "src/assets/logo/profit_logo_branca.png": ((512, 288), 100, True),
}


def optimize(relative_path: str, max_size: tuple[int, int], quality: int, lossless: bool) -> None:
    source = ROOT / relative_path
    destination = source.with_suffix(".webp")

    with Image.open(source) as image:
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(
            destination,
            "WEBP",
            quality=quality,
            method=6,
            lossless=lossless,
            exact=True,
        )


if __name__ == "__main__":
    for path, options in IMAGES.items():
        optimize(path, *options)
