---
title: Monitor y Cola de Trabajos
description: Monitorea el estado de tus integraciones y la cola de trabajos en tiempo real.
---

# Monitor y Cola de Trabajos

**Ruta:** Panel Administrador → Integraciones → Monitor

## Monitor de Integraciones

El monitor te da visibilidad completa sobre el estado de tus integraciones en tiempo real.

### KPIs principales

| Indicador | Descripción |
| --- | --- |
| Eventos hoy | Cantidad de eventos procesados en el día |
| Tasa de éxito (7d) | Porcentaje de eventos exitosos en los últimos 7 días |
| Cola pendiente | Eventos esperando ser procesados |
| Por estado | Distribución de eventos por estado (completado, fallido, pendiente, etc.) |

### Rendimiento por proveedor

Tabla con métricas de los últimos 7 días por cada proveedor activo: total de eventos, tasa de éxito, eventos fallidos, latencia promedio y última actividad.

### Salud de webhooks

Tabla con el estado de cada webhook configurado: URL, estado (activo/pausado/circuit abierto), tasa de éxito, fallos consecutivos, entregas en 7 días, rate limit y latencia.

### Registro de eventos

En la parte inferior del Monitor puedes ver la tabla detallada de todos los eventos, filtrar por estado y tipo, y hacer clic en cualquier evento para ver:

- **Metadatos** — Tipo, estado, fechas de creación y procesamiento, reintentos
- **Payload** — Los datos completos del evento en formato JSON
- **Entregas webhook** — URL, código HTTP de respuesta, duración
- **Entregas a proveedores** — Proveedor, estado, duración, mensaje de error

Si un evento falló, puedes reintentarlo manualmente desde el detalle.

---

## Cola de Trabajos

**Ruta:** Panel Administrador → Integraciones → Cola de Trabajos

Muestra el estado de los jobs de integración en tiempo real:

| Estado | Descripción |
| --- | --- |
| Pendientes | Trabajos en espera de ser procesados |
| En Proceso | Ejecutándose actualmente |
| Fallidos | Trabajos que tuvieron error |
| Trabajo Más Antiguo | El job más antiguo pendiente |

Puedes filtrar por cola, estado y límite. La vista tiene dos tabs: **Trabajos Activos** y **Fallidos**.

## Preguntas frecuentes

**¿Qué significan los estados de los eventos?**
- **Pendiente** — En espera de procesamiento
- **Procesando** — Ejecutándose en este momento
- **Completado** — Enviado exitosamente a todos los destinos
- **Fallido** — Hubo un error en la entrega (se puede reintentar)
- **Dead Letter** — Falló después de todos los reintentos automáticos

**¿Puedo reintentar un evento fallido?**
Sí. Desde el detalle del evento, haz clic en "Reintentar" para re-encolarlo.
