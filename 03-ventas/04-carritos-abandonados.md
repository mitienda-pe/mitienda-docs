# Carritos Abandonados

**Ruta:** Panel Administrador → Ventas → Carritos Abandonados

## ¿Qué es?

Muestra los carritos de compra que los visitantes llenaron pero no completaron. Es una oportunidad de recuperar ventas contactando a esos compradores.

## Listado de carritos abandonados

Por cada carrito verás:
- Email del comprador (si se identificó)
- Productos que dejó en el carrito (nombre, cantidad y precio)
- Monto total del carrito
- Fecha en que se abandonó
- Estado de recuperación

## Detalle de un carrito

Al ingresar al detalle verás exactamente qué productos dejó el comprador y por qué monto, junto con sus datos de contacto si los ingresó durante el proceso de compra.

## Enviar email de recuperación

Si tienes una integración de email marketing activa (Mailchimp, Klaviyo, Brevo, etc.), puedes enviar un correo al comprador recordándole que tiene productos en su carrito.

Esta acción se puede automatizar desde [Integraciones](../13-integraciones.md) usando el evento `cart.abandoned`.

## Preguntas frecuentes

**¿Se registran todos los carritos o solo los de usuarios registrados?**
Se registran los carritos de compradores que ingresaron su email durante el proceso de checkout, aunque no hayan completado la compra.

**¿Cuánto tiempo permanece un carrito en este listado?**
Los carritos se mantienen en el listado por un periodo determinado. Carritos muy antiguos pueden ser depurados automáticamente.

**¿Puedo ver cuántos carritos recuperé?**
Sí, el campo "Estado de recuperación" indica si el comprador regresó y completó su pedido después de ser contactado.

**¿Cómo automatizo los emails de recuperación?**
Configura la integración con tu plataforma de email marketing desde [Integraciones](../13-integraciones.md) y activa el evento `cart.abandoned`.
