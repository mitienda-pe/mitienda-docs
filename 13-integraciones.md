# Integraciones

**Ruta:** Panel Administrador → Integraciones

## ¿Qué son las Integraciones?

Las integraciones conectan tu tienda con herramientas externas de email marketing, CRM, tracking publicitario y automatización. Cuando ocurre un evento en tu tienda (un pedido, un nuevo cliente, etc.), la integración envía esa información a la herramienta conectada.

## Cómo funciona

MiTienda genera **eventos** automáticamente en momentos clave:

| Evento | Cuándo se dispara |
|---|---|
| `order.created` | Cuando se crea un nuevo pedido |
| `order.paid` | Cuando un pedido es marcado como pagado |
| `customer.created` | Cuando se registra un nuevo cliente |
| `product.updated` | Cuando se actualiza un producto |
| `cart.abandoned` | Cuando un carrito es abandonado |

Cada integración se suscribe a los eventos que le interesan y recibe la información automáticamente.

---

## Email Marketing

### Proveedores disponibles

| Proveedor | Eventos soportados |
|---|---|
| **Mailchimp** | Pedido creado, pedido pagado, cliente creado, carrito abandonado |
| **Brevo (Sendinblue)** | Pedido creado, pedido pagado, cliente creado, carrito abandonado |
| **Klaviyo** | Todos los eventos + producto actualizado |
| **Doppler** | Pedido creado, pedido pagado, cliente creado, carrito abandonado |
| **MailerLite** | Cliente creado |
| **Sendy** | Cliente creado |
| **EmailOctopus** | Cliente creado |
| **SendFox** | Cliente creado |

### Configurar una integración de email marketing

1. Ve a **Integraciones → Proveedores**
2. Selecciona tu plataforma de email marketing
3. Ingresa las credenciales (API key, List ID, etc.) que encuentras en tu cuenta de esa plataforma
4. Haz clic en **Test** para verificar la conexión
5. Activa la integración con el switch

---

## CRM / Omnicanal

| Proveedor | Eventos soportados |
|---|---|
| **ICOMM** | Cliente creado, pedido creado, pedido pagado |

---

## Tracking / Publicidad

| Proveedor | Descripción |
|---|---|
| **Facebook CAPI** | Envía eventos al servidor de Meta para optimizar anuncios (complementa al Pixel). Ver: [Facebook/Meta](12-configuracion/06-facebook-meta.md) |

---

## Automatización

| Proveedor | Descripción |
|---|---|
| **Zapier** | Conecta MiTienda con más de 5,000 aplicaciones. Recibe eventos de pedido, cliente y producto en cualquier herramienta de Zapier |

Para Zapier, copia la URL de webhook que te proporciona Zapier y pégala en la configuración de esta integración.

---

## Webhooks Personalizados

**Ruta:** Integraciones → Webhooks

Los webhooks te permiten enviar los eventos de tu tienda a cualquier URL de tu elección, como tu propio servidor, un sistema interno o una herramienta que no está en la lista de integraciones.

### Crear un webhook

| Campo | Descripción |
|---|---|
| URL destino | La URL que recibirá los datos (ej: `https://miservidor.com/webhook`) |
| Secret key | Clave para verificar la autenticidad del webhook (firma HMAC) |
| Eventos suscritos | Qué eventos enviar a esa URL |
| Activo | Si el webhook está habilitado |

### Cómo funciona

Cuando ocurre un evento suscrito, MiTienda envía un POST a tu URL con los datos del evento en formato JSON. El header incluye una firma HMAC que puedes verificar con tu secret key para confirmar que el mensaje viene de MiTienda.

Si la entrega falla, el sistema reintenta automáticamente 3 veces.

---

## Monitor de Eventos

**Ruta:** Integraciones → Eventos

Aquí puedes ver el historial de ejecuciones de todas tus integraciones:
- Timestamp del evento
- Tipo de evento
- Estado (exitoso / fallido)
- Respuesta del servidor destino

Si un evento falló, puedes reintentar manualmente desde aquí.

## Preguntas frecuentes

**¿Puedo tener varias integraciones de email marketing activas al mismo tiempo?**
Sí. Puedes tener Mailchimp y Klaviyo activos simultáneamente, por ejemplo.

**¿Los eventos históricos anteriores a activar la integración se sincronizan?**
No. Las integraciones solo envían eventos a partir del momento en que se activan.

**¿Zapier tiene costo adicional?**
Zapier tiene su propio plan de precios independiente de MiTienda. La integración en MiTienda es gratuita.

**¿Cómo verifico que mi webhook recibe correctamente los datos?**
Desde el Monitor de Eventos puedes ver si las entregas son exitosas. También puedes usar herramientas como webhook.site para hacer pruebas.
