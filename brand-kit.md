# AGENTOPOLIS CHAOS RANK — Brand Kit

> **Official visual doctrine for the CHAOS RANK district.**
> Black grid. Cyan signal. Red authority. Machine-readable proof. 🛡️

---

## Core Positioning

**AGENTOPOLIS CHAOS RANK** is AI-search visibility infrastructure for agentic brands.

This is not a SaaS product. This is not an agency. This is **sovereign infrastructure** — the terrain others must build on.

---

## Taglines

| Context | Tagline |
|---------|---------|
| Primary | **Machine-readable proof for the agentic web** |
| Doctrine | **Don't build backlinks. Build citation gravity.** |
| Pipeline | **UGC → Evidence → Agents → Visibility** |
| Rally | **Rank where the machines answer** |
| Hero | **Infrastructure becomes the terrain others must build on.** |

---

## Logo System

### Full Logo (Horizontal)

**File:** `assets/logo.svg`  
**Dimensions:** 380×80px viewBox (scalable SVG)  
**Components:**
- Left: Icon mark (signal bars + fang arrow + circuit frame)
- Center: Divider line
- Right: Wordmark — "AGENTOPOLIS" (Orbitron 900) + "CHAOS RANK" (JetBrains Mono 700)

**Usage:**
- Site navigation header (resize to 28px height)
- Document headers
- Email signatures (PNG export required)

### Icon Mark (Square)

**File:** `assets/favicon.svg`  
**Dimensions:** 32×32px viewBox (scalable SVG)  
**Components:**
- Dark background with rounded rect
- Cyan circuit corner marks
- 4 signal bars (ascending — the dominant/tallest is red)
- Red fang/arrow above dominant bar

**Concept:** Signal bars forming a ranking skyline. The red bar represents citation dominance. The fang arrow is the "ranking arrow" — the machine pointing upward.

**Usage:**
- Browser favicon: `<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">`
- App icon (48×48 PNG export)
- Social media profile icon

### OG / Social Card

**File:** `assets/og-image.svg`  
**Dimensions:** 1200×630px (standard OG ratio)  
**⚠️ Note:** Export to PNG for production social use. SVG is provided as source; many social platforms require PNG.

**Recommended export:**
```bash
# Using Inkscape CLI:
inkscape assets/og-image.svg --export-png=assets/og-image.png --export-width=1200

# Using rsvg-convert:
rsvg-convert -w 1200 -h 630 assets/og-image.svg -o assets/og-image.png
```

---

## Color Palette

| Role | Name | Hex | CSS Variable | Usage |
|------|------|-----|--------------|-------|
| Background | Near-Black | `#050810` | `--color-bg` | Primary background |
| Background Alt | Deep Navy | `#070d1a` | `--color-bg-2` | Panel underlays |
| Panel | Glass Dark | `rgba(8,18,38,0.82)` | `--color-panel` | Card backgrounds |
| Primary Neon | Cyan | `#00ffe6` | `--color-cyan` | Primary accent, borders, links |
| Cyan Dim | Cyan 60% | `rgba(0,255,230,0.6)` | `--color-cyan-dim` | Secondary cyan use |
| Power Accent | Red | `#ff2d55` | `--color-red` | Authority, warning, dominant elements |
| Text | Soft White | `#e8f0fe` | `--color-white` | Primary text |
| Signal Glow | Electric Blue | `#1a88ff` | (inline use) | Hover states, active signal |
| Muted | Slate Blue | `#6a7fa8` | `--color-muted` | Secondary text, subtitles |
| Grid | Cyan Ghost | `rgba(0,255,230,0.04)` | `--color-grid` | Background grid pattern |

### Gradient Recipes

**Hero Title:**
```css
background: linear-gradient(135deg, #e8f0fe 0%, #00ffe6 60%, #ff2d55 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Ambient Background Glow:**
```css
background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,230,0.05) 0%, transparent 70%);
```

**Agent Avatar:**
```css
background: linear-gradient(135deg, rgba(0,255,230,0.2), rgba(255,45,85,0.2));
```

---

## Typography

### Display (Logo + Hero Headings)

| Font | Weight | Use |
|------|--------|-----|
| **Orbitron** | 900 (Black) | Logo wordmark, hero H1 |
| **Orbitron** | 700 (Bold) | Section headings |
| Space Grotesk | 700 | Fallback display |

```css
--font-display: 'Orbitron', 'Space Grotesk', var(--font-sans);
```

**Load from Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Code / Mono

| Font | Weight | Use |
|------|--------|-----|
| **JetBrains Mono** | 400/600/700 | Terminal output, code blocks, nav labels, tags |
| IBM Plex Mono | 400 | Fallback mono |
| Courier New | 400 | System fallback |

```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

### Body / UI

| Font | Weight | Use |
|------|--------|-----|
| **Inter** | 400/500/600 | Body text, paragraphs, descriptions |
| Segoe UI | 400 | Windows fallback |
| system-ui | — | OS native fallback |

```css
--font-sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
```

---

## Logo Icon Concept

**Symbol rationale:**

The CHAOS RANK icon mark encodes three brand concepts in one graphic:

1. **Signal bars / city skyline** — 4 ascending vertical bars evoke both mobile signal strength (prominence in AI results) and a city skyline (AGENTOPOLIS — the agent city).

2. **Dominant red bar** — The tallest bar is red, not cyan. It represents the entity that CHAOS RANK infrastructure has elevated to citation dominance. Red = authority, not warning.

3. **Fang / ranking arrow** — The upward-pointing diamond shape above the dominant bar is the "fang" — sharp, angular, pointing up. It's the ranking arrow. The infrastructure signal. The proof rising above noise.

4. **Circuit frame** — The circuit corner marks on the bounding square are "machine-readable" visual shorthand — this is infrastructure, not content.

---

## Icon Mark Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| `favicon.svg` | 32×32 icon mark | Browser tab, app icon |
| Icon inside `logo.svg` | 72×72 rendered at 28px | Nav header |
| 3× scale in `og-image.svg` | 216×216 | Social card |

---

## Glow Effects

All glows are CSS box-shadow or SVG filter based.

```css
/* Cyan glow */
--glow-cyan: 0 0 12px rgba(0, 255, 230, 0.5), 0 0 30px rgba(0, 255, 230, 0.2);

/* Red glow */
--glow-red: 0 0 12px rgba(255, 45, 85, 0.5), 0 0 30px rgba(255, 45, 85, 0.2);
```

SVG filter pattern (for embedded use):
```xml
<filter id="glow-cyan">
  <feGaussianBlur stdDeviation="3" result="blur"/>
  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
```

---

## Glassmorphism Panel

```css
.glass {
  background: rgba(8, 18, 38, 0.82);
  border: 1px solid rgba(0, 255, 230, 0.18);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}
.glass:hover {
  border-color: rgba(0, 255, 230, 0.55);
  box-shadow: 0 0 12px rgba(0,255,230,0.5), 0 0 30px rgba(0,255,230,0.2);
}
```

---

## Grid Background

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,230,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,230,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}
```

---

## Brand Voice

**Adjectives:** Sharp. Strategic. Technical. Sovereign.

**Tone:** This is infrastructure language — precise, declarative, confident. No fluffy SaaS marketing. No "unlock your potential" language. No exclamation marks.

| ✅ CHAOS RANK voice | ❌ Avoid |
|--------------------|---------|
| "Machine-readable proof" | "Supercharge your SEO!" |
| "Citation gravity" | "Boost your rankings" |
| "Sovereign entity node" | "all-in-one platform" |
| "The terrain others build on" | "Easy to use" |
| "Evidence graph" | "Content strategy" |
| "Proof object" | "High-quality content" |

---

## Badge

Use in README files and documentation:

```markdown
[![CHAOS RANK](https://img.shields.io/badge/CHAOS%20RANK-Live-00ffe6?style=flat-square&labelColor=050810&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iIzA1MDgxMCIvPjxyZWN0IHg9IjIiIHk9IjEwIiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiByeD0iMSIgZmlsbD0iIzAwZmZlNiIvPjxyZWN0IHg9IjYiIHk9IjciIHdpZHRoPSIzIiBoZWlnaHQ9IjciIHJ4PSIxIiBmaWxsPSIjMDBmZmU2Ii8+PHJlY3QgeD0iMTAiIHk9IjMiIHdpZHRoPSI0IiBoZWlnaHQ9IjExIiByeD0iMSIgZmlsbD0iI2ZmMmQ1NSIvPjwvc3ZnPg==)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/)
```

Simple text badge:
```markdown
[![CHAOS RANK](https://img.shields.io/badge/CHAOS%20RANK-Active-00ffe6?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/)
[![GEO/AEO](https://img.shields.io/badge/GEO%2FAEO-Infrastructure-ff2d55?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/pages/ai-search-visibility.html)
[![llms.txt](https://img.shields.io/badge/llms.txt-Ready-00ffe6?style=flat-square&labelColor=050810)](https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/llms.txt)
```

---

## Asset Inventory

| File | Type | Dimensions | Status |
|------|------|------------|--------|
| `assets/logo.svg` | SVG | 380×80 viewBox | ✅ Production |
| `assets/favicon.svg` | SVG | 32×32 viewBox | ✅ Production |
| `assets/og-image.svg` | SVG | 1200×630 viewBox | ✅ Source (PNG export needed) |
| `assets/og-image.png` | PNG | 1200×630 | ⚠️ Export required |

---

## District Identity

```
AGENTOPOLIS
  └── CHAOS RANK DISTRICT
        ├── Skill Registry (6 skills)
        ├── Agent Registry (2 agents)
        ├── Evidence Graph
        └── Machine Layer (llms.txt, sitemap, claims.json)
```

**Canonical URL:** `https://wiredchaos.github.io/AGENTROPOLIS-CHAOS-RANK/`  
**GitHub:** `https://github.com/wiredchaos/AGENTROPOLIS-CHAOS-RANK`  

---

*"Infrastructure becomes the terrain others must build on."*  
— AGENTOPOLIS CHAOS RANK DOCTRINE
