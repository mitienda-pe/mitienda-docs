---
title: Links de Pago
description: Cobra por WhatsApp con un enlace que genera una venta real, descuenta stock y emite comprobante.
---

# Links de Pago

**Ruta:** Panel Administrador → Ventas → Links de Pago

## ¿Qué son los Links de Pago?

Un link de pago es un enlace que le envías a un cliente para que pague. Sirve para cobrar por WhatsApp, redes sociales o teléfono, sin que el cliente tenga que recorrer tu tienda y armar el carrito.

Cuando el cliente paga, **la venta entra a tu tienda como cualquier otra**: aparece en Pedidos, descuenta el stock y emite el comprobante según tu configuración de facturación.

::: tip Si vienes del panel anterior
Este módulo reemplaza a los "links de pago" del panel antiguo, que cobraban sin generar la venta: no descontaban inventario ni emitían comprobante, y había que registrar todo a mano después.
:::

## Crear un link de pago

Presiona **Nuevo link**. Puedes cobrar de dos maneras, y combinarlas en un mismo link.

### Productos del catálogo

Busca por nombre o SKU y agrega los productos con su cantidad. Se cobra el precio vigente de tu catálogo.

El precio queda **congelado al crear el link**: si después cambias el precio del producto o entra una promoción, el cliente paga lo que le prometiste cuando le compartiste el enlace.

### Concepto libre

Para cobrar algo que no está en tu catálogo: un servicio, un saldo pendiente, un adelanto, un flete.

| Campo | Descripción |
|---|---|
| Concepto | Lo que estás cobrando (ej: "Consulta médica") |
| Monto | Importe final, **con IGV incluido** |
| Cantidad | Cuántas veces se cobra ese concepto |
| Afectación | Gravado (con IGV), Exonerado o Inafecto |

La afectación define cómo sale el concepto en el comprobante electrónico. Viene preseleccionada según la configuración de tu tienda; cámbiala solo si ese cobro en particular tributa distinto.

### Condiciones del cobro

| Campo | Descripción |
|---|---|
| Vence el | Último día en que se puede pagar. El link queda vigente hasta el final de ese día. Si lo dejas vacío, no vence |
| Veces que se puede pagar | Cuántos pagos admite el link. Por defecto **1**, que es lo habitual para un cobro a un cliente puntual. Déjalo vacío para que sea ilimitado |
| Nombre y teléfono | Datos del cliente. El teléfono se usa para abrir el chat de WhatsApp ya dirigido a esa persona |
| Mensaje | Texto que acompaña al enlace cuando lo compartes por WhatsApp |
| Observación | Nota interna. **Solo tú la ves**, el cliente no |

::: warning "Veces que se puede pagar" no es stock
Es el cupo del enlace, no del inventario. Un link con cupo 5 se puede pagar 5 veces; si no tienes 5 unidades, las ventas igual entran y tu stock queda en negativo. Para cobros a un solo cliente, deja el valor en 1.
:::

## Compartir el link

Al terminar, presiona **Crear y compartir**. Se abre una ventana con:

- El monto que cobra el enlace.
- La URL, con un botón para copiarla.
- **Enviar por WhatsApp**, que abre el chat con el mensaje y el enlace listos. Si cargaste el teléfono del cliente, abre la conversación directamente con él.

Puedes volver a abrir esta ventana cuando quieras desde el ícono de compartir en el listado.

## Estados de un link

En el listado, la columna **Estado** te dice si el link se puede cobrar **ahora mismo**:

| Estado | Significa |
|---|---|
| Activo | Se puede pagar |
| Programado | Todavía no entra en vigencia |
| Pausado | Lo pausaste tú. Se puede reactivar |
| Vencido | Pasó la fecha de vencimiento |
| Agotado | Se pagó tantas veces como permitía el cupo |
| Anulado | Lo anulaste. No se puede reactivar |
| No disponible | No se puede cobrar por otro motivo (por ejemplo, la pasarela dejó de estar disponible) |

## Pausar, reactivar y anular

Desde la columna **Acciones**:

- **Pausar** deja el enlace inutilizable temporalmente. Quien lo abra no podrá pagar, pero puedes reactivarlo después.
- **Anular** lo desactiva de forma definitiva. No tiene vuelta atrás.

En ambos casos el enlace ya compartido sigue existiendo: lo que cambia es que deja de aceptar pagos.

## Ver las ventas de un link

La columna **Ventas** muestra cuántos pagos recibió cada link. Las ventas generadas aparecen en el módulo de [Pedidos](01-pedidos.md) como cualquier otra venta, con su comprobante y su descuento de stock.

## Preguntas frecuentes

**¿El cliente necesita tener cuenta en mi tienda?**
No. Abre el enlace, paga y listo.

**¿Qué pasa si cambio el precio de un producto después de crear el link?**
El cliente paga el precio que tenía el producto cuando creaste el link. Si quieres cobrar el precio nuevo, crea un link nuevo.

**¿Puedo cobrar productos del catálogo y un concepto libre en el mismo link?**
Sí. Agrega los productos en una pestaña y los conceptos en la otra: lo seleccionado en cada una se conserva y se suma al total.

**¿El link descuenta stock cuando lo creo?**
No. El stock se descuenta recién cuando el cliente paga.

**¿Puedo modificar un link ya creado?**
No. Anúlalo y crea uno nuevo con los datos correctos.

**¿Se puede cobrar con envío a domicilio?**
Sí, si el link se creó pidiendo envío. En ese caso el cliente completa su dirección al pagar y la venta entra a [Despacho](05-despacho.md) como cualquier otra.
