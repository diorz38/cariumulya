# Hero asset provenance

## Source-to-raster mapping

- Day foreground source: `digital-village-hero.svg` → shipping layer: `digital-village-hero.webp`.
- Night foreground source: `digital-village-hero-night.svg` → shipping layer: `digital-village-hero-night.webp`.
- Day background source: `digital-village-hero-background.svg` → shipping layer: `digital-village-hero-background.webp`.
- Night background source: `digital-village-hero-night-background.svg` → shipping layer: `digital-village-hero-night-background.webp`.
- Canvas: all four variants use a `1600×1100` SVG viewBox and ship as `1600×1100` WebP rasters.
- Layer split: foreground SVGs use transparent canvases and retain the exact object geometry, dimensions, and placement of the pre-`1a94953` composition; background SVGs contain fill-only atmosphere and no village objects.
- Legacy opaque composites at the existing foreground paths are no longer produced; those paths remain referenced and now ship transparent foreground layers.

## Method

- Renderer: installed Playwright Chromium via `npx playwright screenshot`, viewport `1600×1100`, transparent page background for foreground rasters.
- Encoder: installed FFmpeg `libwebp`, quality `90`, compression level `6`.
- Quick IDs: `261114-9ah` (original day/night composites), `261114-ac1` (background/foreground layer split).
- Dependencies: no new project dependency; rendering used tools already present in development environment.

## Content and direction

- Direction: Impeccable concept seed `32fbd44d92b7c50c` (Blue Civic / Digital Village).
- Foreground content: original isometric digital-village scene with a dimensional balai desa as focal point, layered civic buildings and homes, winding roads, terraced fields, layered tree canopies, raised terrain, soft directional shadows, and connected civic data nodes.
- Background content: full-canvas day or night sky, upper-right light source, soft clouds, and restrained digital particles; no rectangular foreground plate remains in the transparent object layer.
- Day lighting: illustrative upper-right daylight, cool blue roof planes, warm-neutral white facades, and soft contact/ambient shadows.
- Night lighting: deep navy ambient sky, cool moonlit and rim-lit architecture, subdued blue-green terrain, restrained warm window illumination, and soft shadows without heavy bloom.
- Palette: civic blue, sky blue, teal, cool green landscape, white or moonlit neutral facades, and restrained amber accents.

## Disclosure and use status

- Status: illustrative, original artwork. Not a factual reconstruction, architectural survey, photographic treatment, or survey model of Pasirukem.
- The artwork contains no factual building, statistic, location, or civic claim; incidental `DATA` lettering is absent from the night variant and the paired raster remains decorative only.
- Repository-local redesign asset; no external source image, tracked-license obligation, or new dependency introduced.
