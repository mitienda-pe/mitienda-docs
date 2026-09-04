---
title: Inventario y Almacenes
description: Kardex de movimientos, ingresos y mermas, transferencias entre almacenes y stock por sucursal.
---

# Inventario y Almacenes

**Ruta:** Panel Administrador → Catálogo → Inventario / Transferencias / Stock por almacén

## ¿Qué es el módulo de Inventario?

El inventario lleva la historia de tu stock: qué entró, qué salió, cuándo y por qué. A diferencia del campo de stock de cada producto —que te dice cuánto tienes **ahora**—, el inventario te dice **cómo llegaste a esa cantidad**.

Está formado por tres pantallas:

| Pantalla | Para qué sirve |
|---|---|
| **Inventario** | El kardex: la bitácora de todos los movimientos. Aquí también registras ingresos, salidas y mermas |
| **Transferencias** | Mover mercadería de un almacén a otro |
| **Stock por almacén** | Ver y editar cuántas unidades tiene cada producto en cada almacén |

::: warning Requiere activación
El inventario es parte de la gestión de stock por almacén y depende de tu plan. Si no lo tienes activo, la pantalla te ofrece un botón **Activar inventario**. Al activarlo, cada venta empieza a dejar su registro en el kardex. **El stock que ya tienes cargado no cambia.**
:::

## El Kardex

Es el listado de movimientos, del más reciente al más antiguo. Cada fila muestra la fecha, el tipo, el producto, el almacén, la cantidad y el **saldo** que quedó después de ese movimiento.

### Tipos de movimiento

Algunos los registras tú; otros los genera el sistema solo.

| Tipo | Origen | Efecto |
|---|---|---|
| Ingreso | Manual | Suma |
| Salida | Manual | Resta |
| Merma | Manual | Resta |
| Venta | Automático | Resta |
| Anulación de venta | Automático | Suma |
| Devolución | Automático | Suma |
| Transferencia (salida) | Transferencias | Resta en el origen |
| Transferencia (entrada) | Transferencias | Suma en el destino |
| Ajuste | Edición manual de stock | Suma o resta |
| Importación | Importación masiva | Suma o resta |
| Reconciliación | Sincronización con un ERP | Suma o resta |

Las ventas de tu tienda y del POS entran solas, junto con sus anulaciones. Tú solo registras lo que ocurre fuera del sistema.

### Filtrar el kardex

Puedes filtrar por **almacén**, por **tipo de movimiento** y por **rango de fechas**. Sin filtros de fecha se muestra todo el periodo.

### Registrar un movimiento manual

Presiona **Registrar movimiento** y elige el tipo:

| Tipo | Cuándo usarlo |
|---|---|
| **Ingreso** | Compra a proveedor, devolución de un cliente, producción propia |
| **Salida** | Consumo interno, muestra a un cliente, traslado fuera del sistema |
| **Merma** | Pérdida: rotura, vencimiento, robo |

Luego elige el **almacén**, escribe el **motivo** (ej: "compra a proveedor", "rotura en almacén") y agrega los productos con su cantidad. Si el producto tiene variantes, eliges cuál al agregarlo.

::: tip Ingreso, salida y merma restan o suman igual
La diferencia entre Salida y Merma no está en el stock —ambas restan lo mismo—, sino en poder distinguir después qué se vendió, qué se consumió y qué se perdió. Usar el tipo correcto es lo que hace útil al kardex cuando revisas el histórico.
:::

## Transferencias entre almacenes

Mueve mercadería de un almacén a otro. **El stock total de tu tienda no cambia: solo se redistribuye.**

Presiona **Nueva transferencia**, elige el almacén de **origen** y el de **destino**, agrega los productos con sus cantidades y, opcionalmente, una **nota** (ej: "reposición semanal").

La transferencia se aplica **en un solo paso**: al confirmarla, el stock sale del origen y entra al destino de inmediato. No hay un estado intermedio de "en tránsito" ni una confirmación de recepción en el destino.

En el listado ves la ruta, el contenido y el estado (**Confirmada** o **Anulada**), y puedes abrir el detalle de cada una.

En el kardex, cada transferencia deja dos movimientos: una *Transferencia (salida)* en el origen y una *Transferencia (entrada)* en el destino.

## Stock por almacén

Es la vista de edición directa: eliges un almacén y ves todos los productos de tu catálogo con las unidades que tiene en ese almacén. Los que nunca cargaste figuran en 0.

Aquí **no se agregan productos**: aparece todo tu catálogo y tú solo editas cantidades. Puedes buscar por nombre o SKU, editar varias filas y presionar **Guardar**, que te indica cuántos cambios vas a aplicar.

### Importar por CSV

El botón **Importar CSV** actualiza el stock de muchos productos de una vez.

### Productos con variantes

Los productos con variantes **no se editan desde esta tabla**. Tienes dos caminos:

1. **Importar CSV** incluyendo la columna `variante_sku`.
2. Registrar un **ingreso** en Catálogo → Inventario, que sí permite elegir la variante.

## Preguntas frecuentes

**¿Activar el inventario cambia mi stock actual?**
No. Solo empieza a registrar los movimientos desde ese momento en adelante.

**¿Por qué el kardex no muestra movimientos anteriores a la activación?**
Porque la bitácora arranca cuando la activas. Lo anterior no se puede reconstruir.

**¿Cuál es la diferencia entre "Stock por almacén" y el stock del producto?**
El stock del producto es el total de la tienda. "Stock por almacén" es cómo se reparte ese total entre tus almacenes.

**¿Una transferencia puede dejar el origen en negativo?**
Revisa el saldo disponible que se muestra al agregar cada línea antes de confirmar.

**¿Las ventas del POS descuentan del almacén de la sucursal?**
Sí, si tu tienda gestiona stock por sucursal. Ver: [POS — Punto de Venta](../16-pos.md).
