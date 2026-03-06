---
title: Webhooks
description: Envía eventos de tu tienda a cualquier URL para integraciones personalizadas con sistemas externos.
---

# Webhooks

**Ruta:** Panel Administrador → Integraciones → Webhooks

## ¿Qué son los webhooks?

Los webhooks te permiten enviar los eventos de tu tienda a cualquier URL de tu elección, como tu propio servidor, un sistema interno o una herramienta que no está en la lista de integraciones.

## Crear una suscripción

Haz clic en **+ Nueva suscripción** y configura:

| Campo | Descripción |
| --- | --- |
| URL destino | La URL que recibirá los datos (ej: `https://miservidor.com/webhook`) |
| Secret key | Clave para verificar la autenticidad del webhook (firma HMAC) |
| Eventos suscritos | Qué eventos enviar a esa URL |
| Activo | Si el webhook está habilitado |

## Cómo funciona

Cuando ocurre un evento suscrito, MiTienda envía un POST a tu URL con los datos del evento en formato JSON. El header incluye una firma HMAC que puedes verificar con tu secret key para confirmar que el mensaje viene de MiTienda.

Si la entrega falla, el sistema reintenta automáticamente hasta 3 veces.

## Verificación de firma HMAC

Para verificar que un webhook fue enviado por MiTienda, valida la firma HMAC incluida en los headers de cada solicitud usando tu secret key.

## Preguntas frecuentes

**¿Cuántos webhooks puedo crear?**
No hay límite en la cantidad de suscripciones. Puedes enviar diferentes eventos a diferentes URLs.

**¿Cómo verifico que mi webhook recibe correctamente los datos?**
Desde el Monitor de Integraciones puedes ver si las entregas son exitosas. También puedes usar herramientas como [webhook.site](https://webhook.site) para hacer pruebas.

**¿Qué pasa si mi servidor está caído?**
El sistema reintenta automáticamente. Si después de 3 intentos sigue fallando, el evento queda como fallido y puedes reintentarlo manualmente desde el Monitor.
