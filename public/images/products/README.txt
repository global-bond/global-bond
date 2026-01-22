Globalbond Product Images

Location
- Place product images in this folder: /images/products
- Files in /public are served statically by Vite at the same path.

Naming (recommended)
- Name by product code so no extra config is needed:
  GBAD-0111.png
  GBAD-0122.png
  GBAD-0133.png
  GBAD-T07.png
  ...
- Supported formats: .png, .jpg, .jpeg, .webp, .svg
- If using a different name or path, set the `image` field in src/data/products.ts for that product.

Size & aspect
- Target ~640x360 (16:9) or square 600x600, optimize for ~100–200 KB.
- Transparent PNG for packs/labels; JPEG/WebP for photos.

Fallback
- If an image is missing, the UI uses /images/product-placeholder.svg automatically.

Tips
- Keep backgrounds consistent.
- Use `object-fit: contain` friendly crops (leave margin around label).
