# Assets Folder

This folder contains images and assets for the All On Board Project website.

## Logo Upload Instructions

To upload the logo for use across the site:

1. Place your logo file in this directory (`/public/assets/`)
2. Recommended naming: `logo.png` or `logo.svg`
3. The logo will be automatically accessible at `/assets/logo.png` (or your chosen filename)

## Current Logo URL (from Webflow)
The current logo is hosted at:
```
https://cdn.prod.website-files.com/636eb06dd029f87036698cf8/636ec03a18e574fa6c51b676_All%20On%20Board%20Project%20Webclip.png
```

You can download this and place it here, or upload your own version.

## Recommended Image Sizes
- **Logo**: Transparent PNG or SVG, ~200-300px width
- **Hero Images**: 1920x1080px or larger
- **Team Photos**: 400x400px (square)
- **Event Photos**: 800x600px or larger

## Usage in Code
Once uploaded, reference images like this:
```tsx
<Image src="/assets/logo.png" alt="All On Board Project" width={200} height={50} />
```
<img width="500" height="500" alt="All On Board Project Logo" src="https://github.com/user-attachments/assets/a796a9b5-cfe5-45af-b9f4-ce7dea57cfd1" />
