---
title: Email Marketing
description: Integra tu tienda con plataformas de email marketing para automatizar campañas y segmentar clientes.
---

# Email Marketing

**Ruta:** Panel Administrador → Integraciones → Proveedores

## ¿Para qué sirve?

Las integraciones de email marketing envían automáticamente datos de tu tienda (pedidos, clientes, carritos abandonados) a tu plataforma de email marketing. Así puedes crear automatizaciones, segmentar audiencias y enviar campañas basadas en el comportamiento real de tus clientes.

## Proveedores disponibles

| Proveedor | Eventos soportados | Credenciales requeridas |
| --- | --- | --- |
| **Mailchimp** | Pedido creado, pedido pagado, cliente creado, carrito abandonado | API Key, List ID, Server prefix |
| **Brevo (Sendinblue)** | Pedido creado, pedido pagado, cliente creado, carrito abandonado | API Key, List ID |
| **Klaviyo** | Todos los eventos + producto actualizado | API Key (Private), List ID |
| **Doppler** | Pedido creado, pedido pagado, cliente creado, carrito abandonado | API Key, List ID |
| **MailerLite** | Cliente creado | API Key, Group ID |
| **Sendy** | Cliente creado | API Key, List ID, URL de instalación |
| **EmailOctopus** | Cliente creado | API Key, List ID |
| **SendFox** | Cliente creado | API Key, List ID |
| **ICOMM** | Cliente creado, pedido creado, pedido pagado | API Key, Store ID |

## Cómo configurar

1. Ve a **Integraciones → Proveedores**
2. Selecciona tu plataforma de email marketing
3. Ingresa las credenciales (API key, List ID, etc.) que encuentras en tu cuenta de esa plataforma
4. Haz clic en **Probar conexión** para verificar que las credenciales son válidas
5. Guarda la configuración

La integración se activa automáticamente al guardar. Los eventos se enviarán a partir de ese momento.

## Eventos sincronizados

| Evento | Cuándo se dispara | Datos enviados |
| --- | --- | --- |
| `order.created` | Cuando se crea un nuevo pedido | Datos del pedido, productos, cliente |
| `order.paid` | Cuando un pedido es marcado como pagado | Datos del pedido y pago |
| `customer.created` | Cuando se registra un nuevo cliente | Nombre, email, teléfono |
| `product.updated` | Cuando se actualiza un producto | Datos del producto (solo Klaviyo) |
| `cart.abandoned` | Cuando un carrito es abandonado | Productos en el carrito, email del cliente |

## Preguntas frecuentes

**¿Puedo tener varias integraciones de email marketing activas al mismo tiempo?**
Sí. Puedes tener Mailchimp y Klaviyo activos simultáneamente, por ejemplo. Ambos recibirán los eventos.

**¿Los eventos históricos anteriores a activar la integración se sincronizan?**
No. Las integraciones solo envían eventos a partir del momento en que se activan.

**¿Qué pasa si la conexión falla?**
El sistema reintenta automáticamente hasta 3 veces. Si sigue fallando, el evento queda registrado como fallido en el Monitor y puedes reintentarlo manualmente.

**¿Dónde veo si mis eventos se están enviando correctamente?**
En **Integraciones → Monitor** puedes ver el estado de cada evento, tasa de éxito por proveedor y reintentar eventos fallidos.
