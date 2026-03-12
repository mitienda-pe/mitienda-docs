---
title: Panel de Despacho
description: Gestiona el flujo de despacho de tus pedidos. Controla estados, notifica al cliente y haz seguimiento desde la preparación hasta la entrega.
---

# Panel de Despacho

**Ruta:** Panel Administrador → Ventas → Despacho

## ¿Qué es el Panel de Despacho?

El Panel de Despacho te permite gestionar el flujo logístico de tus pedidos, desde que se confirma el pago hasta que el producto llega al cliente. A diferencia del módulo de Pedidos (enfocado en facturación y pagos), el panel de despacho está diseñado para el equipo de almacén y logística: **no muestra precios**, se enfoca en estados de envío y permite notificar al cliente en cada paso.

::: tip Disponibilidad
El Panel de Despacho está disponible en el **Plan Large**. Si no lo ves en tu menú, verifica tu plan en Configuración → Plan y Suscripción.
:::

## Vista principal

La vista principal muestra todos tus pedidos con su estado de despacho actual.

### Barra de estadísticas

En la parte superior verás tarjetas con el conteo de pedidos en cada estado. Haz clic en cualquier tarjeta para filtrar la tabla por ese estado.

| Estado | Color | Descripción |
|---|---|---|
| Pago pendiente | Azul | El pedido aún no tiene pago confirmado |
| Pago confirmado | Amarillo | Pago recibido, listo para preparar |
| Preparando producto | Amarillo | El equipo de almacén está preparando el pedido |
| En camino | Amarillo | El pedido fue despachado y está en tránsito |
| Orden lista para retiro | Amarillo | El pedido está listo para que el cliente lo recoja |
| Entregado | Verde | El cliente recibió el pedido |
| Rechazado | Rojo | El cliente rechazó la entrega |
| Cancelado | Rojo | El pedido fue cancelado |
| Devuelto | Rojo | El producto fue devuelto |
| Re-programado | Amarillo | La entrega fue reprogramada |

### Filtros

Puedes combinar múltiples filtros para encontrar pedidos rápidamente:

- **Estado de despacho** — Filtra por uno o varios estados
- **Tipo de entrega** — Delivery a domicilio o recojo en tienda
- **Búsqueda** — Por código de referencia o nombre del cliente
- **Fecha de venta** — Rango de fechas (desde/hasta)
- **Fecha de entrega** — Fecha programada de entrega

Usa el botón **Limpiar filtros** para restablecer todos los filtros.

### Tabla de pedidos

La tabla muestra la información clave de cada pedido:

| Columna | Descripción |
|---|---|
| Código | Código de referencia del pedido (clic para ver detalle) |
| Fecha | Fecha y hora de la venta |
| Cliente | Nombre del comprador |
| Dirección | Dirección de entrega o sucursal de recojo |
| Ubigeo | Departamento / Provincia / Distrito |
| Fecha entrega | Fecha programada de entrega |
| Tipo | Icono de moto (domicilio) o tienda (recojo) |
| Estado | Badge con el estado actual de despacho |

### Acciones por pedido

Cada fila tiene un menú de acciones:

- **Ver detalle** — Abre la vista de detalle del pedido
- **Cambiar estado** — Abre el diálogo para cambiar el estado de despacho
- **Descargar Picking List** — Descarga el PDF con la lista de productos (sin precios)
- **Descargar Etiqueta de Envío** — Descarga la etiqueta para el paquete

### Cambio masivo de estado

Puedes cambiar el estado de varios pedidos a la vez:

1. Marca los checkboxes de los pedidos que deseas actualizar
2. Aparecerá una barra en la parte inferior con el conteo de seleccionados
3. Haz clic en **Cambiar estado**
4. Selecciona el nuevo estado y agrega un comentario si lo deseas
5. Confirma el cambio

## Vista de detalle

Al hacer clic en un pedido, verás toda la información de despacho organizada en dos secciones.

### Información del pedido

- **Datos del cliente** — Nombre, teléfono, email
- **Datos de entrega** — Dirección completa, ubigeo, tipo de envío, fecha programada
- **Lista de productos** — SKU, nombre del producto, cantidad e imagen (sin precios, optimizado para almacén)

::: tip Modo picking
La vista de detalle está diseñada como una lista de picking: muestra los productos sin precios para que el equipo de almacén pueda preparar el pedido sin ver información comercial sensible.
:::

### Cambio de estado

En el panel derecho puedes cambiar el estado del pedido:

1. **Estado actual** — Badge grande con el estado vigente
2. **Nuevo estado** — Dropdown con los estados disponibles según el flujo
3. **Comentarios para el cliente** — Texto que se enviará por email al comprador (ej: "Tu pedido está en camino, número de seguimiento: ABC123")
4. **Observación del reparto** — Nota interna para tu equipo (no se envía al cliente)
5. **Enviar email al cliente** — Checkbox para activar/desactivar la notificación por email

### Timeline de estados

Debajo del formulario de cambio de estado verás el historial cronológico completo:

- Fecha y hora de cada cambio
- Estado al que se cambió
- Usuario que realizó el cambio
- Comentarios para el cliente (si se escribieron)
- Observaciones internas
- Indicador de si se notificó al cliente por email

## Flujos de despacho

El sistema maneja dos flujos según el tipo de entrega:

### Delivery a domicilio

```
Pago confirmado → Preparando producto → En camino → Entregado
```

### Recojo en tienda

```
Pago confirmado → Preparando producto → Orden lista para retiro → Entregado
```

### Saltar estados

Si cambias directamente a un estado posterior (por ejemplo, de "Pago confirmado" a "Entregado"), el sistema registrará automáticamente los estados intermedios. Esto es útil cuando el proceso fue rápido y no necesitas registrar cada paso manualmente.

### Estados post-entrega

Después de marcar un pedido como "Entregado", puedes cambiar a:

- **Rechazado** — El cliente rechazó el producto
- **Cancelado** — Se canceló el pedido
- **Devuelto** — El cliente devolvió el producto
- **Re-programado** — Se reprogramó la entrega

Estos estados son intercambiables entre sí, permitiendo corregir el estado si es necesario.

### Pago contra entrega

Para pedidos con pago contra entrega, puedes confirmar el pago manualmente desde el panel de despacho (cambiar de "Pago pendiente" a "Pago confirmado").

## Notificaciones por email

Cada vez que cambias el estado de un pedido, puedes optar por notificar al cliente:

1. Escribe un comentario en el campo "Comentarios para el cliente"
2. Asegúrate de que el checkbox "Enviar email al cliente" esté marcado
3. El sistema enviará un email al comprador con el nuevo estado y tu comentario

::: warning Importante
Los emails se envían solo si marcas el checkbox. Las observaciones del reparto nunca se envían al cliente, son solo para uso interno de tu equipo.
:::

## Documentos descargables

Desde el panel de despacho puedes descargar:

| Documento | Descripción |
|---|---|
| **Picking List** | Lista de productos del pedido con checkboxes para marcar y área de firma. No incluye precios. |
| **Etiqueta de Envío** | Etiqueta 4×6" con datos del remitente, destinatario, dirección, ubigeo y código de barras. |

## Preguntas frecuentes

**¿Por qué no veo precios en el panel de despacho?**

El panel de despacho está diseñado para el equipo de almacén y logística. No muestra precios para evitar que personal no autorizado vea información comercial. Si necesitas ver precios, usa el módulo de Pedidos (Ventas → Pedidos).

**¿Puedo usar el panel de despacho desde el celular?**

Sí, la vista es responsive y se adapta a dispositivos móviles. Sin embargo, para mayor comodidad en la gestión diaria, recomendamos usar una pantalla más grande.

**¿Qué pasa si cambio el estado por error?**

Los estados post-entrega (Entregado, Rechazado, Cancelado, Devuelto, Re-programado) son intercambiables, por lo que puedes corregir el estado. Sin embargo, no es posible regresar a estados anteriores del flujo principal (por ejemplo, de "En camino" a "Preparando").

**¿El panel de despacho está conectado con mi WMS?**

Si tu tienda tiene integración con un WMS (como Urbano o Mintsoft), los cambios de estado del WMS se sincronizarán automáticamente con el panel de despacho.

**¿Quién puede acceder al panel de despacho?**

Todos los usuarios del equipo con acceso al panel administrador pueden ver el panel de despacho. Los permisos se gestionan desde Configuración → Usuarios del Equipo.
