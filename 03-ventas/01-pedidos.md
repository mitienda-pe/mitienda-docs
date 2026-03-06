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

- Estado de pago (pendiente, pagado, rechazado, reembolsado)
- Fecha desde / Fecha hasta

**Búsqueda:** por número de referencia, email del cliente o número de documento.

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

Si tu tienda tiene integración con NetSuite, verás una sección que muestra el estado de la sincronización automática del pedido con el ERP (pendiente, sincronizado o con error).

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
