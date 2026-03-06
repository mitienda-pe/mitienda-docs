---
title: Integraciones
description: Conecta tu tienda con herramientas de email marketing, publicidad, analytics, chat y automatización.
---

# Integraciones

**Ruta:** Panel Administrador → Integraciones

## ¿Qué son las Integraciones?

Las integraciones conectan tu tienda con herramientas externas de email marketing, publicidad, analytics, chat, captura de leads y automatización.

El módulo de Integraciones incluye:

- **Proveedores** — Configura y gestiona todas tus integraciones desde un solo lugar
- **Monitor** — Observa el estado de eventos, rendimiento de proveedores y salud de webhooks
- **Webhooks** — Envía eventos a URLs personalizadas
- **Cola de Trabajos** — Estado del procesamiento de eventos en tiempo real

## Tipos de integración

### Integraciones de eventos (server-side)

Cuando ocurre un evento en tu tienda (un pedido, un nuevo cliente, etc.), la integración envía esa información automáticamente al proveedor conectado.

| Evento | Cuándo se dispara |
| --- | --- |
| `order.created` | Cuando se crea un nuevo pedido |
| `order.paid` | Cuando un pedido es marcado como pagado |
| `customer.created` | Cuando se registra un nuevo cliente |
| `product.updated` | Cuando se actualiza un producto |
| `cart.abandoned` | Cuando un carrito es abandonado |

**Proveedores:** Mailchimp, Brevo, Klaviyo, Doppler, MailerLite, Sendy, EmailOctopus, SendFox, ICOMM, Facebook CAPI.

### Integraciones frontend (widgets y plugins)

Estos proveedores insertan un script en tu tienda online que se carga automáticamente cuando un cliente la visita. No requieren configuración de eventos.

**Proveedores:** Google Analytics, Tag Manager, Hotjar, Clarity, Tawk.to, LiveChat, Chatway, OneSignal, OptinMonster, Privy, Bdow, HelloBar, CrazyEgg, Poptin.

### Publicidad y Tracking

Píxeles de seguimiento para optimizar campañas publicitarias.

**Proveedores:** Facebook/Meta (Pixel + CAPI), TikTok Pixel.

---

Ver también:
- [Email Marketing](/13-integraciones/04-email-marketing)
- [Google](/13-integraciones/02-google)
- [Widgets y Plugins](/13-integraciones/03-widgets-plugins)
- [Webhooks](/13-integraciones/05-webhooks)
- [Monitor y Cola](/13-integraciones/06-monitor)
