---
title: Reportes
description: Los nueve reportes de tu tienda — ventas, catálogo, promociones, rechazos de pago, SIRE, redondeo POS y analítica web.
---

# Reportes

**Ruta:** Panel Administrador → Reportes

## ¿Qué son los Reportes?

El módulo de Reportes te permite analizar el rendimiento de tu tienda con datos detallados y exportarlos a Excel o CSV para trabajarlos fuera de la plataforma.

La mayoría funciona igual: eliges un rango de fechas, revisas la vista previa y exportas. **Analítica Web es la excepción** y funciona como un panel en pantalla.

## Reportes disponibles

### Reporte de Pedidos

**Ruta:** Reportes → Pedidos

Una fila por pedido, con código, fecha, cliente, correo, documento, estado de pago, fecha de pago, método, total y estado de envío. Puedes filtrar por fechas, por estado de pago y por pasarela.

Es el reporte de base para conciliaciones: exportas el periodo y cruzas contra lo que te liquidó cada pasarela.

### Ventas por Producto

**Ruta:** Reportes → Ventas por Producto

Tiene **dos modos**, que se eligen arriba:

| Modo | Qué devuelve |
|---|---|
| **Detalle por línea** | Una fila por cada línea de venta. Sirve para auditar qué se vendió exactamente en cada pedido |
| **Ranking por producto** | Una fila por producto, con lo vendido acumulado. Sirve para ver best-sellers y productos de bajo rendimiento |

Ambos modos incluyen la columna **SKU**.

::: tip Dos variantes del mismo producto son dos líneas
En "Detalle por línea", un pedido con dos variantes del mismo producto aparece como dos filas. Si quieres el total del producto sin importar la variante, usa "Ranking por producto".
:::

### Catálogo de Productos

**Ruta:** Reportes → Catálogo de Productos

El estado de tu catálogo: stock disponible, precios y estado de publicación de cada producto. Útil para revisar qué tienes agotado o sin publicar sin recorrer el listado producto por producto.

### Rendimiento de Promociones

**Ruta:** Reportes → Promociones

Mide la efectividad de tus campañas: cuántos cupones se usaron, cuántos descuentos se otorgaron y el impacto en ventas.

### Análisis de Rechazos

**Ruta:** Reportes → Rechazos de Pago

Por qué te están fallando los cobros. Muestra cuatro totales —intentos, aprobados, rechazados y monto rechazado— y luego el desglose:

- **Tasa de rechazo por pasarela**: intentos, aprobados, rechazados y % de rechazo de cada una. Es el reporte que te dice si una pasarela está rindiendo peor que otra.
- **Motivos de rechazo**: qué respondió el banco, con casos y porcentaje.
- **Marca de tarjeta** y **banco**: dónde se concentran los rechazos.

Se filtra por rango de fechas y por pasarela.

::: tip Una tasa de rechazo alta rara vez es culpa del comprador
Antes de asumir que son tarjetas sin fondos, mira los motivos. Un pico concentrado en un banco o en una marca suele ser configuración de la pasarela, no comportamiento de tus clientes.
:::

### Reporte SIRE

**Ruta:** Reportes → SIRE

::: warning Solo para tiendas de Perú
El SIRE es un registro de SUNAT, así que esta opción aparece únicamente si tu tienda está configurada en Perú.
:::

El **Registro de Ventas e Ingresos**: un comprobante por fila, con el formato para conciliar contra la propuesta que SUNAT te presenta. Cada fila muestra su estado, y los anulados vienen marcados como tales.

Se filtra solo por rango de fechas. **Si no eliges fechas, se abre en el mes anterior completo**, que es el periodo que normalmente vas a declarar.

### Redondeo POS

**Ruta:** Reportes → Redondeo POS

Cuando cobras en efectivo en el punto de venta, el total se redondea a la moneda fraccionaria más cercana. Ese redondeo a veces va a favor del negocio y a veces en contra; este reporte lo cuantifica.

Muestra las ventas con redondeo, la **ganancia** (a favor), la **pérdida** (en contra) y el detalle día por día con el **neto**.

Sirve para dos cosas: cuadrar la caja cuando el efectivo no coincide con el sistema por céntimos, y detectar si el redondeo está sistemáticamente en contra.

### Reportes Personalizados

**Ruta:** Reportes → Personalizados

::: tip Solo si tu tienda tiene alguno asignado
Son reportes hechos a la medida de una operación concreta, con el formato que ya usas. No son una función del plan: se desarrollan por pedido. La opción aparece en el menú **solo si tu tienda tiene al menos uno asignado**.
:::

Si necesitas un reporte con un formato específico —para tu contador, tu ERP o un cliente corporativo— consúltalo con soporte. Ver: [Contacto y Soporte](/18-contacto).

### Analítica Web

**Ruta:** Reportes → Analítica Web

El único que no se exporta: es un panel de tráfico y comportamiento de visitantes, con un indicador de **cuántas personas están en tu tienda en este momento**.

Métricas principales: visitantes, páginas vistas, tasa de rebote y tiempo promedio, con su evolución en el tiempo.

Y siete desgloses:

| Panel | Te dice |
|---|---|
| Páginas más visitadas | Qué contenido atrae |
| Fuentes de tráfico | De dónde llegan |
| Campañas UTM | Rendimiento de tus campañas etiquetadas |
| Navegadores | Con qué navegan |
| Dispositivos | Móvil, escritorio o tablet |
| Países | Desde dónde te visitan |
| Eventos | Acciones registradas en tu tienda |

Los periodos disponibles son Hoy, Ayer, Últimos 7 días, Últimos 30 días y Últimos 90 días.

::: warning "Analítica web no configurada"
Si ves ese mensaje, la analítica no está activa en tu tienda. Escribe a soporte para que la habiliten: no es algo que se active desde el panel.
:::

## Cómo usar un reporte

1. Selecciona el reporte que necesitas.
2. Aplica el filtro de fechas (rango de inicio y fin) y los filtros propios de ese reporte.
3. Revisa la **vista previa**, que muestra los primeros 100 registros en pantalla y te indica cuántos encontró en total.
4. Si necesitas todos los datos, haz clic en **Exportar**.

## Formatos de exportación

| Formato | Descripción |
|---|---|
| **CSV** | Compatible con Excel, Google Sheets y cualquier herramienta de análisis |
| **XLSX** | Archivo Excel directo |

## Preguntas frecuentes

**¿Cuántos registros muestra la vista previa?**
Hasta 100. El contador te indica cuántos hay en total; para tenerlos todos, exporta.

**¿Puedo programar el envío automático de reportes?**
No. Los reportes se generan manualmente.

**¿El reporte de pedidos incluye pedidos cancelados?**
Sí. Filtra por estado de pago para acotar a los pagados, rechazados u otros.

**¿Cómo veo cuánto procesó cada pasarela?**
En el reporte de pedidos la pasarela es un **filtro**, no un desglose: exporta filtrando por cada una y suma. Para comparar rendimiento entre pasarelas, el reporte de **Análisis de Rechazos** sí trae la tabla comparativa con intentos, aprobados y % de rechazo por pasarela.

**No veo SIRE ni Personalizados en el menú.**
SIRE aparece solo en tiendas de Perú. Personalizados, solo si tu tienda tiene algún reporte a medida asignado.

**¿Por qué el total de un reporte no cuadra con mi liquidación de la pasarela?**
La pasarela liquida neto de comisiones y con su propio corte de fechas. Exporta el reporte de pedidos filtrando por esa pasarela y concilia pedido por pedido, no por el total.
