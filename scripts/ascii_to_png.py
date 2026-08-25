"""Convert ASCII art to pixel art PNG with retro 8-bit style."""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

def ascii_to_png(ascii_file: str, output_png: str, char_width: int = 12, char_height: int = 16):
    """
    Convert ASCII art text file to a pixel art PNG.

    Args:
        ascii_file: Path to .txt file with ASCII art
        output_png: Output PNG filename
        char_width: Pixel width per character
        char_height: Pixel height per character
    """
    with open(ascii_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Remove empty lines and find max width
    lines = [line.rstrip('\n') for line in lines]
    max_width = max(len(line) for line in lines) if lines else 1
    height = len(lines)

    # Create image with retro pixel colors
    img_width = max_width * char_width
    img_height = height * char_height

    # Dark background (8-bit retro style)
    bg_color = (20, 20, 40)  # Dark blue-black
    img = Image.new('RGB', (img_width, img_height), bg_color)
    draw = ImageDraw.Draw(img)

    # Try to use a monospace font; fall back to default
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", size=14)
    except:
        font = ImageFont.load_default()

    # Text colors (bright, 8-bit palette)
    text_color = (0, 255, 136)  # Bright cyan
    for y, line in enumerate(lines):
        x_pos = 0
        for char in line:
            # Color by character type for retro feel
            if char in '█':
                color = (255, 100, 100)  # Red/pink for blocks
            elif char in '░':
                color = (100, 200, 255)  # Light blue for light blocks
            elif char in '🇳🇴📚':
                color = (255, 220, 0)  # Gold for emojis
            elif char in '✋❌':
                color = (255, 100, 100)  # Red
            elif char in ' ':
                color = bg_color
            else:
                color = text_color

            if char not in ' ':
                draw.text((x_pos, y * char_height), char, font=font, fill=color)
            x_pos += char_width

    img.save(output_png)
    print(f"✓ PNG saved: {output_png} ({img_width}x{img_height}px)")


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: ascii_to_png.py <ascii_file> <output.png>")
        sys.exit(1)

    ascii_to_png(sys.argv[1], sys.argv[2])
