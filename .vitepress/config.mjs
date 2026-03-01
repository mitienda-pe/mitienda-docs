import { defineConfig } from 'vitepress'

export default defineConfig({
  // ─── Metadatos del sitio ───────────────────────────────────────────────
  title: 'MiTienda.pe — Ayuda',
  description: 'Manual de usuario del Panel Administrador de MiTienda.pe. Aprende a configurar y gestionar tu tienda online.',
  lang: 'es-PE',

  // ─── URL base (ajustar si se publica en subdirectorio) ─────────────────
  // base: '/ayuda/',

  // ─── SEO ───────────────────────────────────────────────────────────────
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0F75E0' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'MiTienda.pe Ayuda' }],
    ['meta', { property: 'og:image', content: 'https://ayuda.mitienda.pe/og-image.png' }],
    // Google Analytics — reemplaza con tu GA4 ID
    // ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
  ],

  // ─── Sitemap automático ─────────────────────────────────────────────────
  sitemap: {
    hostname: 'https://ayuda.mitienda.pe'
  },

  // ─── Última actualización ───────────────────────────────────────────────
  lastUpdated: true,

  // ─── Tema ───────────────────────────────────────────────────────────────
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Centro de Ayuda',

    // Navegación superior
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía de inicio', link: '/00-introduccion' },
      { text: 'FAQ', link: '/FAQ' },
      {
        text: 'Mi tienda',
        link: 'https://mitienda.pe',
        target: '_blank'
      }
    ],

    // Sidebar principal
    sidebar: [
      {
        text: 'Primeros pasos',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/00-introduccion' },
          { text: 'Dashboard', link: '/01-dashboard' },
          { text: 'Clientes', link: '/02-clientes' },
        ]
      },
      {
        text: 'Ventas',
        collapsed: false,
        items: [
          { text: 'Pedidos', link: '/03-ventas/01-pedidos' },
          { text: 'Opiniones y Reviews', link: '/03-ventas/02-reviews' },
          { text: 'Libro de Reclamaciones', link: '/03-ventas/03-libro-reclamaciones' },
          { text: 'Carritos Abandonados', link: '/03-ventas/04-carritos-abandonados' },
          { text: 'Reportes', link: '/04-reportes' },
        ]
      },
      {
        text: 'Catálogo',
        collapsed: true,
        items: [
          { text: 'Productos', link: '/05-catalogo/01-productos' },
          { text: 'Categorías', link: '/05-catalogo/02-categorias' },
          { text: 'Marcas', link: '/05-catalogo/03-marcas' },
          { text: 'Gamas / Líneas', link: '/05-catalogo/04-gammas' },
          { text: 'Atributos y Variantes', link: '/05-catalogo/05-atributos' },
          { text: 'Etiquetas', link: '/05-catalogo/06-etiquetas' },
          { text: 'Listas de Productos', link: '/05-catalogo/07-listas' },
          { text: 'Configuración del Catálogo', link: '/05-catalogo/08-config-catalogo' },
        ]
      },
      {
        text: 'Marketing',
        collapsed: true,
        items: [
          { text: 'Promociones', link: '/06-marketing/01-promociones' },
          { text: 'Upsell / Cross-sell', link: '/06-marketing/03-upsales' },
          { text: 'Combos', link: '/06-marketing/04-combos' },
          { text: 'Barras de Anuncio', link: '/06-marketing/05-barras-anuncio' },
          { text: 'Códigos de Referido', link: '/06-marketing/06-referidos' },
        ]
      },
      {
        text: 'Contenido',
        collapsed: true,
        items: [
          { text: 'Páginas', link: '/07-contenido/01-paginas' },
          { text: 'Blog', link: '/07-contenido/02-blog' },
          { text: 'Páginas Legales', link: '/07-contenido/03-paginas-legales' },
          { text: 'Carrusel / Banners', link: '/07-contenido/04-carrusel' },
          { text: 'Galería de Imágenes', link: '/07-contenido/05-galeria' },
          { text: 'Componentes', link: '/07-contenido/06-componentes' },
          { text: 'Mensajes Personalizados', link: '/07-contenido/07-mensajes' },
        ]
      },
      {
        text: 'Apariencia',
        collapsed: true,
        items: [
          { text: 'Logo y Branding', link: '/08-apariencia/01-general' },
          { text: 'Colores', link: '/08-apariencia/02-colores' },
          { text: 'Tipografía', link: '/08-apariencia/03-tipografia' },
          { text: 'Tarjeta de Producto', link: '/08-apariencia/04-tarjeta-producto' },
          { text: 'Menú de Navegación', link: '/08-apariencia/05-menu' },
        ]
      },
      {
        text: 'Pagos y Envíos',
        collapsed: true,
        items: [
          { text: 'Formas de Pago', link: '/09-formas-pago' },
          { text: 'Envíos y Couriers', link: '/10-envios' },
        ]
      },
      {
        text: 'Facturación',
        collapsed: true,
        items: [
          { text: 'Facturación Electrónica', link: '/11-facturacion' },
        ]
      },
      {
        text: 'Tu Tienda',
        collapsed: true,
        items: [
          { text: 'Información', link: '/12-configuracion/01-informacion' },
          { text: 'Sucursales', link: '/12-configuracion/02-sucursales' },
          { text: 'Configuración General', link: '/12-configuracion/03-config-general' },
          { text: 'Dominio Propio', link: '/12-configuracion/04-dominio' },
          { text: 'SEO', link: '/12-configuracion/05-seo' },
          { text: 'Facebook / Meta', link: '/12-configuracion/06-facebook-meta' },
          { text: 'TikTok', link: '/12-configuracion/07-tiktok' },
          { text: 'Usuarios del Equipo', link: '/12-configuracion/08-usuarios-equipo' },
          { text: 'Notificaciones', link: '/12-configuracion/09-notificaciones' },
          { text: 'Plan y Suscripción', link: '/12-configuracion/10-suscripcion' },
        ]
      },
      {
        text: 'Integraciones avanzadas',
        collapsed: true,
        items: [
          { text: 'Integraciones', link: '/13-integraciones' },
          { text: 'NetSuite', link: '/14-netsuite' },
          { text: 'API', link: '/15-api' },
        ]
      },
      {
        text: 'Otras aplicaciones',
        collapsed: true,
        items: [
          { text: 'POS — Punto de Venta', link: '/16-pos' },
          { text: 'App Móvil', link: '/17-app-movil' },
        ]
      },
      {
        text: 'Ayuda',
        items: [
          { text: 'Preguntas Frecuentes', link: '/FAQ' },
        ]
      }
    ],

    // Búsqueda local (sin backend, funciona en SSG)
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar en la documentación'
          },
          modal: {
            noResultsText: 'No se encontraron resultados para',
            resetButtonTitle: 'Limpiar búsqueda',
            footer: {
              selectText: 'para seleccionar',
              navigateText: 'para navegar',
              closeText: 'para cerrar'
            }
          }
        }
      }
    },

    // Footer
    footer: {
      message: 'Centro de Ayuda de MiTienda.pe',
      copyright: `© ${new Date().getFullYear()} MiTienda.pe — Todos los derechos reservados`
    },

    // Texto de "última actualización"
    lastUpdated: {
      text: 'Actualizado el',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    // Links de edición (útil si el repo es privado, puedes eliminar esta sección)
    // editLink: {
    //   pattern: 'https://github.com/tu-org/mitienda-docs/edit/main/:path',
    //   text: 'Editar esta página en GitHub'
    // },

    // Navegación entre páginas
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },

    // Texto del índice lateral derecho
    outline: {
      label: 'En esta página',
      level: [2, 3]
    },

    // Links sociales (opcional)
    socialLinks: [
      // { icon: 'instagram', link: 'https://instagram.com/mitienda.pe' }
    ],

    // Texto del botón "volver al inicio" en mobile
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Modo oscuro',
  },

  // ─── Markdown ──────────────────────────────────────────────────────────
  markdown: {
    // Números de línea en bloques de código
    lineNumbers: false,
    // Anclas en encabezados
    anchor: {
      permalink: true
    }
  },
})
