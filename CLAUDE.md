# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **MiTienda.pe Centro de Ayuda** — a user-facing knowledge base for the MiTienda.pe e-commerce admin panel. Built with [VitePress](https://vitepress.dev) (v1.5+), it's a static documentation site written entirely in Spanish (es-PE).

## Commands

```bash
npm run dev       # Start dev server with hot reload → http://localhost:5173
npm run build     # Build for production → output in .vitepress/dist
npm run preview   # Preview production build locally
```

## Architecture

- **VitePress config**: [.vitepress/config.mjs](.vitepress/config.mjs) — site metadata, nav, sidebar structure, search config, SEO heads
- **Custom theme**: [.vitepress/theme/index.mjs](.vitepress/theme/index.mjs) extends the default VitePress theme
- **Brand styles**: [.vitepress/theme/custom.css](.vitepress/theme/custom.css) — MiTienda brand colors (primary: `#0F75E0`), Inter font, dark mode overrides
- **Homepage**: [index.md](index.md) — VitePress `home` layout with hero + feature cards
- **Static assets**: `public/` — logo.png, favicon.png, hero-illustration.png, og-image.png

## Content Structure

Documentation files use a numbered prefix convention (`00-` through `17-`) that defines logical ordering. Some sections are single files, others are directories with sub-pages:

- Single-file sections: `00-introduccion.md`, `01-dashboard.md`, `02-clientes.md`, `04-reportes.md`, `09-formas-pago.md`, etc.
- Multi-file sections (directories): `03-ventas/`, `05-catalogo/`, `06-marketing/`, `07-contenido/`, `08-apariencia/`, `12-configuracion/`
- Standalone: `FAQ.md`

Sub-pages within directories also use numbered prefixes (e.g., `05-catalogo/01-productos.md`).

## Adding a New Page

1. Create the `.md` file in the appropriate location using the numbered prefix convention
2. Add it to the `sidebar` array in [.vitepress/config.mjs](.vitepress/config.mjs)
3. If it's a top-level navigation item, also add it to the `nav` array

## Content Conventions

- All content is in **Spanish** (es-PE locale)
- VitePress markdown features are used: tip/warning/info containers, tables, code blocks
- The site uses VitePress's built-in local search (no external search backend)
- Deploy target is Cloudflare Pages (auto-deploys on push to `main`)
