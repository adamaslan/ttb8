---
description: Always ask the user before generating images
globs: **/*
alwaysApply: true
---

# Rule: Always Ask Before Generating Images

- **Do NOT auto-generate images**: Never call image generation tools (such as `generate_image`, Imagen, DALL-E, etc.) without explicitly asking the user first.
- **User often has the image**: The user frequently already has existing/custom images prepared (e.g., in `ttb8/images/`, project assets, or local folders).
- **Workflow**:
  1. Ask the user if they already have an image or want to specify an existing file path.
  2. Only generate a new image if the user explicitly approves or requests image generation.
