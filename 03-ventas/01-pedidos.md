---
title: Pedidos
description: Gestiona las órdenes de compra de tu tienda. Consulta estados, detalles, envíos y seguimiento de pedidos.
---

# Pedidos

**Ruta:** Panel Administrador → Ventas → Pedidos

## ¿Qué es el módulo de Pedidos?

Aquí gestionas todas las órdenes de compra que recibe tu tienda, desde cualquier canal (web, POS o API).

## Listado de pedidos

Muestra todos los pedidos con opciones de filtrado y búsqueda.

**Filtros disponibles:**

- Estado de pago
- Fecha desde / Fecha hasta

**Búsqueda:** por número de referencia, email del cliente o número de documento.

### Estados de pago

| Estado | Significa |
|---|---|
| Sin pago | El pedido se creó pero el cliente nunca llegó a iniciar el pago |
| Pendiente | El pago está en curso o esperando confirmación (ej: transferencia por validar) |
| Pagado | Cobrado y confirmado |
| Rechazado | La pasarela rechazó el cobro |
| Expirado | Venció el plazo para pagar sin que se completara |
| Anulado | Anulaste la venta desde el panel |
| Contracargo | El cliente desconoció el cargo ante su banco y el dinero se revirtió |
| Reembolsado | Se devolvió el dinero al cliente |

::: tip "Sin pago" y "Expirado" no son lo mismo que "Rechazado"
Rechazado significa que hubo un intento de cobro y falló — ahí conviene mirar el [reporte de Rechazos de Pago](../04-reportes.md). En "Sin pago" y "Expirado" nunca hubo intento: son carritos que no llegaron a pagarse.
:::

### Columna Sync

Si tu tienda envía las ventas a un ERP o WMS, el listado muestra la columna **Sync** con el estado de cada pedido: sincronizado, pendiente o con error. Aparece solo si hay pedidos con integración.

Sirve para detectar de un vistazo las ventas que no llegaron al ERP. Una venta que no llegó no está en tu contabilidad, y antes eso solo se veía entrando pedido por pedido.

## Detalle del pedido

Al ingresar a un pedido verás toda la información organizada en tres columnas: facturación, envío y pago.

### Información del pedido

| Campo | Descripción |
|---|---|
| Referencia | Código único del pedido |
| Cliente | Nombre, email, teléfono y documento |
| Productos | Lista de items con cantidad, precio unitario y subtotal |
| Dirección de envío | Calle, distrito, provincia, departamento, referencia y coordenadas GPS |
| Método de pago | Pasarela utilizada y referencia de la transacción |
| Estado de pago | Pendiente / Pagado / Rechazado / Reembolsado |
| Estado de envío | Pendiente / Preparando / Enviado / Entregado |
| Cupón o código de referido | Si se usó alguno |
| Comprobante electrónico | Tipo, serie, número y enlace al PDF |
| Notas del comprador | Indicaciones especiales al momento de comprar |
| Origen | Web / POS / API |
| Fecha de creación | Fecha y hora del pedido |

### Cambiar estados

Puedes actualizar el estado de pago y el estado de envío de forma independiente. Cada cambio queda registrado en el **Historial** del pedido.

### Enviar Email

Desde el detalle puedes enviar el email de confirmación con el comprobante al cliente usando el botón **Enviar Email**.

### Mapa de Ubicación

Mapa interactivo que muestra las coordenadas GPS de la dirección de entrega, con enlace directo a Google Maps.

### Sincronización ERP

Si tu tienda tiene integración con un ERP, verás una sección con el estado de la sincronización automática del pedido (pendiente, sincronizado o con error). Cuando falla, hay un botón para **reintentar el envío** sin tener que rehacer la venta.

### Anular una venta

Desde el detalle puedes anular una venta. **La acción no se puede deshacer** y hace lo siguiente:

- La venta pasa a **Anulada** y deja de contar en tus reportes.
- **Se repone el stock** de los productos.
- Si ya se emitió comprobante, **se solicita la baja ante SUNAT**.
- Si la venta llegó al almacén, se intenta cancelar el pedido allí. Si ya fue despachado, el panel te avisa: eso se resuelve con el proveedor.

Es obligatorio escribir un **motivo**, que queda registrado junto con el usuario que anuló.

::: danger Anular no devuelve el dinero
La anulación ordena tu inventario y tu contabilidad, pero **no reembolsa al cliente**. El reembolso se hace aparte, desde el panel de tu pasarela de pago.
:::

## Descargar documentos del pedido

Cada pedido puede exportarse en 5 formatos:

| Formato | Descripción | Nombre del archivo |
|---|---|---|
| **PDF** | Factura completa con encabezado, cliente, items y totales | `pedido-{ref}.pdf` |
| **CSV** | SKU, producto, cantidad, precio y subtotal | `pedido-{ref}.csv` |
| **Ticket 80mm** | Formato para impresora térmica | `ticket-{ref}.pdf` |
| **Picking List** | Lista de productos para preparar el pedido, con checkboxes y área de firma | `picking-{ref}.pdf` |
| **Etiqueta de Envío** | Etiqueta 4x6" con remitente, destinatario, dirección, ubigeo, GPS y código de barras | `etiqueta-envio-{ref}.pdf` |

## Calificación de riesgo del cliente

Cada pedido tiene un **score de riesgo** de 0 a 100, calculado automáticamente al momento de la compra.

| Color | Rango | Significado |
|---|---|---|
| 🟢 Verde | 0 – 39 | Riesgo bajo |
| 🟡 Amarillo | 40 – 69 | Riesgo medio |
| 🔴 Rojo | 70 – 100 | Riesgo alto |

El score analiza 9 métricas:
- Dirección de envío
- Nombre del cliente
- Número de documento
- Email
- Teléfono
- Dirección IP
- Patrón temporal (múltiples pedidos en la última hora)
- Monto vs promedio de la tienda
- Huella digital del dispositivo

El análisis es **cross-tienda**: compara patrones entre todas las tiendas de la plataforma para detectar fraudes conocidos. Puedes actualizar el score manualmente con el botón **Actualizar análisis**.

## Historial

Registro cronológico de todos los eventos del pedido: creación, cambios de estado, emisión de comprobante, emails enviados, etc.

## Preguntas frecuentes

**¿Puedo editar un pedido ya creado?**
No es posible modificar los productos de un pedido existente. Si hay un error, debes gestionar una devolución o crear un nuevo pedido.

**¿Cómo cancelo un pedido?**
Cambia el estado de pago a "Rechazado" o "Reembolsado" según corresponda.

**¿Cómo imprimo la etiqueta de envío?**
En el detalle del pedido, haz clic en **Descargar → Etiqueta de Envío**. El archivo PDF está optimizado para impresoras de etiquetas 4×6 pulgadas.

**¿Qué significa "Enviado a NetSuite"?**
Si tu tienda tiene integración con NetSuite, cada pedido pagado puede sincronizarse automáticamente. El botón "Enviar a NetSuite" permite hacerlo manualmente si la sincronización automática falló.

**¿Cómo activo las notificaciones de nuevos pedidos?**
Desde **Tu Tienda → Notificaciones** puedes configurar el email y las notificaciones push para nuevos pedidos.
