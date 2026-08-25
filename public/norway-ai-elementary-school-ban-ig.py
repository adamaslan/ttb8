"""Generate square Instagram-safe image for Norway article."""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

# Create 1080x1080 square image (Instagram standard)
img = Image.new('RGB', (1080, 1080), (20, 20, 40))  # Dark blue-black
draw = ImageDraw.Draw(img)

# Try to use a monospace font
try:
    font_large = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", size=48)
    font_medium = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", size=36)
    font_small = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", size=24)
except:
    font_large = ImageFont.load_default()
    font_medium = font_large
    font_small = font_large

# Colors
red = (255, 100, 100)
cyan = (0, 255, 136)
gold = (255, 220, 0)

# Title
title = "NORWAY BANS AI"
title_bbox = draw.textbbox((0, 0), title, font=font_large)
title_width = title_bbox[2] - title_bbox[0]
title_x = (1080 - title_width) // 2
draw.text((title_x, 200), title, font=font_large, fill=gold)

# Subtitle
subtitle = "IN ELEMENTARY SCHOOLS"
subtitle_bbox = draw.textbbox((0, 0), subtitle, font=font_medium)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (1080 - subtitle_width) // 2
draw.text((subtitle_x, 300), subtitle, font=font_medium, fill=cyan)

# Message
msg1 = "Protecting Young Minds"
msg1_bbox = draw.textbbox((0, 0), msg1, font=font_small)
msg1_width = msg1_bbox[2] - msg1_bbox[0]
msg1_x = (1080 - msg1_width) // 2
draw.text((msg1_x, 450), msg1, font=font_small, fill=red)

msg2 = "Deep Focus Over AI Rush"
msg2_bbox = draw.textbbox((0, 0), msg2, font=font_small)
msg2_width = msg2_bbox[2] - msg2_bbox[0]
msg2_x = (1080 - msg2_width) // 2
draw.text((msg2_x, 550), msg2, font=font_small, fill=red)

msg3 = "Teachers Lead. Kids Learn."
msg3_bbox = draw.textbbox((0, 0), msg3, font=font_small)
msg3_width = msg3_bbox[2] - msg3_bbox[0]
msg3_x = (1080 - msg3_width) // 2
draw.text((msg3_x, 650), msg3, font=font_small, fill=cyan)

# Save
dest = Path("/Users/adamaslan/code/ttb8/public/norway-ai-elementary-school-ban.png")
img.save(dest, "PNG")
print(f"✓ Generated 1080x1080 Instagram-safe image: {dest}")
