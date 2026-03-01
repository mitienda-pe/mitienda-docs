# MiTienda Docs — Centro de Ayuda

Knowledge base del Panel Administrador de MiTienda.pe, construido con [VitePress](https://vitepress.dev).

## Estructura del proyecto

```
mitienda-docs/
├── .vitepress/
│   ├── config.mjs          ← Configuración principal (nav, sidebar, SEO)
│   └── theme/
│       ├── index.mjs       ← Tema personalizado
│       └── custom.css      ← Variables de marca y estilos
├── public/                 ← Imágenes estáticas (logo, favicon, og-image)
│   ├── logo.png
│   ├── favicon.png
│   ├── hero-illustration.png
│   └── og-image.png
├── 00-introduccion.md
├── 01-dashboard.md
├── 02-clientes.md
├── 03-ventas/
├── 04-reportes.md
├── 05-catalogo/
├── 06-marketing/
├── 07-contenido/
├── 08-apariencia/
├── 09-formas-pago.md
├── 10-envios.md
├── 11-facturacion.md
├── 12-configuracion/
├── 13-integraciones.md
├── 14-netsuite.md
├── 15-api.md
├── 16-pos.md
├── 17-app-movil.md
├── FAQ.md
└── index.md               ← Homepage con hero y feature cards
```

## Setup local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con hot reload
npm run dev
# → http://localhost:5173

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Cómo editar contenido

1. Edita cualquier archivo `.md` directamente
2. El servidor de desarrollo recarga automáticamente
3. Haz commit y push → el deploy se dispara solo

**Agregar una nueva página:**
1. Crea el archivo `.md` en la carpeta correspondiente
2. Agrégalo al sidebar en `.vitepress/config.mjs` (sección `sidebar`)
3. Si aplica, agrégalo también al `nav` superior

## Deploy en Cloudflare Pages

1. Sube el repositorio a GitHub
2. En Cloudflare Pages → Create project → Connect to Git
3. Selecciona el repo
4. Configuración de build:
   - **Framework preset:** VitePress
   - **Build command:** `npm run build`
   - **Build output directory:** `.vitepress/dist`
5. Deploy

Cloudflare Pages redeploya automáticamente en cada push a `main`.

## Deploy en Netlify (alternativa)

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".vitepress/dist"
```

## Imágenes necesarias en /public

Coloca estas imágenes antes del primer deploy:

| Archivo | Tamaño recomendado | Uso |
|---|---|---|
| `logo.png` | 200×50 px | Logo en la navbar |
| `favicon.png` | 32×32 px | Ícono del navegador |
| `hero-illustration.png` | 400×400 px | Imagen del hero en homepage |
| `og-image.png` | 1200×630 px | Open Graph (redes sociales) |

## Búsqueda

La búsqueda está configurada con el proveedor local de VitePress (sin backend, sin costo).
Funciona offline y no envía datos a terceros.

Si el volumen de contenido crece mucho, considera migrar a [Algolia DocSearch](https://docsearch.algolia.com/) (gratuito para docs públicas).
