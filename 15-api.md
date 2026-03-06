---
title: API
description: Genera credenciales de acceso para integrar tu tienda con sistemas externos mediante la API de MiTienda.
---

# API

**Ruta:** Panel Administrador → API

## ¿Qué es el módulo de API?

Permite generar credenciales de acceso para integrar tu tienda con sistemas externos mediante la API de MiTienda.

## Token de Acceso

Desde este módulo puedes generar un **Token de Acceso** único para autenticarte con la API de MiTienda. Guárdalo en un lugar seguro, no lo compartas.

- **Renovar Token** — genera un nuevo token (invalida el anterior)
- **Eliminar Token** — revoca el acceso a la API

## Webhooks (versión legacy)

Desde esta sección puedes configurar webhooks básicos por tipo de evento. Hay 3 tipos de eventos fijos disponibles:

- **Confirmación de Venta/Pedido**
- **Registro de Cliente**
- **Actualización de Producto**

Para webhooks más avanzados con firma HMAC y registro de entregas, usa [Integraciones → Webhooks](/13-integraciones/05-webhooks).

## Documentación de la API

La documentación completa de los endpoints disponibles está accesible desde el panel. Incluye los endpoints para consultar productos, pedidos, clientes y más.

## Preguntas frecuentes

**¿Para qué necesitaría la API?**
Para conectar tu tienda con sistemas propios, crear integraciones personalizadas, o automatizar procesos que no están cubiertos por las integraciones predefinidas.

**¿La API tiene límites de uso?**
Sí. Hay límites de solicitudes por minuto según tu plan. Consulta la documentación para los detalles.

**¿Qué pasa si pierdo mi Token de Acceso?**
Puedes generar uno nuevo con el botón **Renovar Token**. El token anterior quedará invalidado.
