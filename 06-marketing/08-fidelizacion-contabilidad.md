# Programa de fidelización — Contabilidad y Facturación

**Categoría:** Marketing / Programa de fidelización  
**Ruta en backoffice:** Marketing → Programa de fidelización → Configuración  
**Última actualización:** 2026-03-05  
**Aplica a:** Modalidad Sellos y Modalidad Puntos

---

## ¿Por qué necesito entender esto antes de activar el programa?

Cuando tu tienda acumula y canjea puntos, estás creando una **obligación económica con tus clientes**: les prometiste que esos puntos tienen un valor que podrán usar en una compra futura. Eso tiene consecuencias contables y fiscales que debes manejar correctamente.

Esta guía explica cómo registrar esas operaciones, cómo emitir los comprobantes correctamente ante SUNAT, y cómo conectarlo con tu ERP si usas uno.

> **Importante:** MiTienda provee la infraestructura y los datos del programa. El registro contable y la responsabilidad tributaria son de tu empresa. Comparte esta guía con tu contador antes de activar el módulo.

---

## El modelo que recomendamos: Pasivo Diferido

Existen tres formas de registrar contablemente un programa de puntos. MiTienda recomienda el **Pasivo Diferido**, que es el modelo correcto según la NIIF 15 (Ingresos de contratos con clientes) y el más transparente frente a SUNAT.

| Modelo | ¿Cómo funciona? | ¿Por qué no lo recomendamos? |
|--------|----------------|------------------------------|
| Descuento directo | Los puntos reducen la base imponible de la venta | Distorsiona el revenue. Puede generar facturas en cero o muy bajas que alertan a SUNAT. |
| Gasto de marketing | Se registra el costo cuando se emiten los puntos | Sobreestima gastos. No refleja los puntos que nunca se canjean. |
| **Pasivo diferido ✓** | Una porción del ingreso se difiere cuando se emiten puntos y se reconoce cuando se canjean | Requiere mantener la cuenta `2311 Puntos por canjear`, pero es el más preciso y auditable. |

La lógica es simple: cuando tu cliente acumula 250 puntos comprando una camiseta, tú ya cobraste S/ 50. Pero le prometiste que esos 250 puntos valen S/ 50 para una compra futura. Esa promesa es un pasivo. Cuando el cliente la honra, reconoces el ingreso.

---

## Modalidad Puntos — Ejemplos contables

### Configuración de ejemplo (tienda de camisetas)

| Parámetro | Valor |
|-----------|-------|
| Puntos por sol gastado | 5 |
| Valor de cada punto | S/ 0.20 |
| Por lo tanto | S/ 50 de compra = 250 puntos = S/ 50 de poder de compra |

---

### Caso 1 — Cliente compra camiseta S/ 50.00 y gana 250 puntos

El valor razonable de los 250 puntos emitidos es S/ 5.00 (estimado conservador: 10% del valor facial, ajustado por breakage histórico). En un modelo simplificado para iniciar, puedes usar el valor facial completo.

**Asiento contable:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Caja / Yape | 50.00 | |
| Ventas (4100) | | 42.37 |
| IGV por pagar (4011) | | 7.63 |
| Pasivo — Puntos por canjear (2311) | | 5.00 |
| Ventas (4100) ajuste | 5.00 | |

> En la práctica: registras S/ 50 de venta, luego haces un asiento de reclasificación que mueve S/ 5.00 de Ventas a Pasivo 2311. El IGV no cambia porque ya lo cobraste sobre S/ 50.

**Factura electrónica (Nubefact):**
- Valor de venta: S/ 42.37
- IGV: S/ 7.63
- **Total: S/ 50.00**
- Forma de pago: Yape / efectivo

---

### Caso 2 — Cliente paga camiseta S/ 50.00 usando 250 puntos (pago total con puntos)

**Asiento contable:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Pasivo — Puntos por canjear (2311) | 50.00 | |
| Ventas (4100) | | 42.37 |
| IGV por pagar (4011) | | 7.63 |

> El cliente no pagó un sol en efectivo, pero **sí se genera IGV**. SUNAT grava el valor de la operación (S/ 50.00), no el medio de pago. El IGV lo absorbe el pasivo que ya habías constituido.

**Factura electrónica (Nubefact):**
- Valor de venta: S/ 42.37
- IGV: S/ 7.63
- **Total: S/ 50.00**
- Forma de pago: **Puntos de fidelidad**
- Importe cobrado en efectivo: S/ 0.00

MiTienda completa automáticamente el campo `formaPago` del XML con `"Puntos de fidelidad"` cuando el pedido se paga total o parcialmente con puntos.

---

### Caso 3 — Pago mixto: 100 puntos (S/ 20.00) + S/ 30.00 en Yape

**Asiento contable:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Caja / Yape | 30.00 | |
| Pasivo — Puntos por canjear (2311) | 20.00 | |
| Ventas (4100) | | 42.37 |
| IGV por pagar (4011) | | 7.63 |

**Factura electrónica:**
- Valor de venta: S/ 42.37
- IGV: S/ 7.63
- **Total: S/ 50.00**
- Forma de pago: Puntos de fidelidad (S/ 20.00) + Yape (S/ 30.00)

---

### Caso 4 — Pedido pagado con puntos es reembolsado

Si el pedido se anula o reembolsa:

**Asiento de reversión:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Ventas (4100) | 42.37 | |
| IGV por pagar (4011) | 7.63 | |
| Pasivo — Puntos por canjear (2311) | | 50.00 |

Los 250 puntos regresan al wallet del cliente automáticamente (MiTienda genera una entrada `type=refund` en el ledger).

---

## Modalidad Sellos — Ejemplos contables

El cupón de sellos funciona como un **descuento comercial condicional**. No genera pasivo cuando se emite; el gasto se reconoce cuando el cliente lo usa.

---

### Caso 1 — Cliente completa la tarjeta (5 sellos) y recibe cupón de S/ 15.00

**Al emitir el cupón:** No hay asiento contable. Se registra como pasivo contingente en notas a los estados financieros.

---

### Caso 2 — Cliente usa el cupón en una compra de S/ 40.00

**Asiento contable:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Caja / Yape | 25.00 | |
| Gasto de promoción — Fidelización (6310) | 12.71 | |
| IGV crédito fiscal (1611) | 2.29 | |
| Ventas (4100) | | 33.90 |
| IGV por pagar (4011) | | 6.10 |

> El descuento de S/ 15.00 es deducible como gasto de marketing con sustento en el programa documentado. El IGV crédito fiscal aplica sobre el descuento otorgado.

**Factura electrónica:**
- Valor de venta: S/ 33.90 (después del descuento S/ 15.00)
- IGV: S/ 6.10
- **Total: S/ 40.00**
- Descuento aplicado: S/ 15.00 (Cupón fidelización)

---

## La cuenta 2311 — Puntos por canjear

Te recomendamos crear esta sub-cuenta en tu plan contable:

```
2000  Pasivos corrientes
  2300  Ingresos diferidos
    2311  Puntos de fidelización por canjear
```

**¿Cómo verificar que el saldo es correcto?**

El backoffice de MiTienda muestra en tiempo real el saldo estimado de esta cuenta:

```
Pasivo estimado 2311 = Total de puntos activos × valor por punto
                     = [saldo del ledger] × S/ 0.20
```

Puedes compararlo con el saldo en tu sistema contable cada mes. Si hay diferencia, exporta el ledger de movimientos desde el backoffice (Marketing → Fidelización → Historial → Exportar CSV) y concilia con tu contador.

---

## Puntos que nunca se canjean (Breakage)

No todos los clientes usan sus puntos. A esto se le llama **breakage**. En programas maduros, entre el 20% y el 40% de los puntos emitidos nunca se canjean.

**¿Qué hago con ese pasivo acumulado?**

Cuando sea "remoto" que el cliente canjee sus puntos (por ejemplo, clientes inactivos hace más de 12 meses), puedes liberar ese pasivo a ingreso:

**Asiento de liberación por breakage:**

| Cuenta | Debe | Haber |
|--------|------|-------|
| Pasivo — Puntos por canjear (2311) | X.XX | |
| Ingreso por vencimiento de puntos (7410) | | X.XX |

> MiTienda no gestiona el breakage automáticamente. Te recomendamos revisar el saldo de la cuenta 2311 con tu contador **al menos cada 6 meses** y hacer el ajuste correspondiente. El ledger del backoffice tiene toda la información necesaria para identificar puntos inactivos por cohorte.

---

## Integración con ERP (NetSuite)

Si tu tienda tiene activada la integración con NetSuite, MiTienda envía automáticamente los siguientes eventos:

### Al emitir puntos (earn)

```
Journal Entry automático:
  Debe:   4100 Ventas                    S/ 5.00
  Haber:  2311 Puntos por canjear        S/ 5.00
  Memo:   "Emisión puntos — Pedido #1042"
```

### Al canjear puntos (redeem)

```
Sales Order con línea de descuento:
  Producto:       Camiseta talla M        S/ 50.00
  Loyalty Pay:    [descuento]            −S/ 50.00  → cuenta 2311
  Net total:      S/ 0.00

Journal Entry complementario:
  Debe:   2311 Puntos por canjear        S/ 50.00
  Haber:  4100 Ventas                    S/ 42.37
  Haber:  2011 IGV por pagar             S/  7.63
  Memo:   "Canje puntos — Pedido #1042"
```

### Configuración requerida en NetSuite

Antes de activar la integración, tu administrador de NetSuite debe:

1. Crear el ítem `Loyalty Pay` de tipo **Discount**, mapeado a la cuenta `2311`.
2. Crear la cuenta `2311 Puntos de fidelización por canjear` bajo `2300 Ingresos diferidos`.
3. Habilitar el webhook de MiTienda en la configuración de la integración (`Ajustes → Integraciones → NetSuite → Fidelización`).

---

## Preguntas frecuentes

**¿Debo emitir factura cuando un cliente paga 100% con puntos?**

Sí. La obligación de emitir comprobante de pago nace con la transferencia del bien o servicio, independientemente del medio de pago. La factura se emite por el valor de mercado (S/ 50.00 + IGV) con la forma de pago indicando "Puntos de fidelidad".

**¿El IGV aplica en ventas con puntos?**

Sí. El IGV grava el valor de la operación, no el flujo de caja. Una venta de S/ 50.00 pagada con puntos genera el mismo IGV que una venta pagada en efectivo.

**¿Puedo deducir el costo del programa como gasto?**

En la modalidad de puntos, el costo se reconoce cuando se canjean (reducción del pasivo). En la modalidad de sellos, el cupón aplicado es un gasto de promoción deducible. En ambos casos, necesitas documentación del programa (esta guía, la configuración del backoffice y el ledger de movimientos sirven como sustento).

**¿Qué pasa si desactivo el programa con puntos activos?**

Los puntos ya emitidos siguen siendo un pasivo de tu empresa. MiTienda mantiene el ledger histórico aunque el programa esté inactivo. Debes decidir con tu contador si honras los puntos pendientes, los vences con previo aviso a los clientes, o los liberas como breakage. MiTienda no cancela automáticamente los saldos al desactivar el programa.

**¿Mis clientes pagan IGV cuando compran con puntos?**

El precio que el cliente ve en tu tienda ya incluye IGV. Cuando paga con puntos, está usando el crédito que acumuló en compras anteriores (donde ya pagó el IGV sobre el precio completo). No paga IGV "de nuevo"; el IGV de la venta actual lo absorbe el pasivo diferido que tú ya contabilizaste.

---

## Documentos relacionados

- [Configurar el programa de fidelización](../loyalty/configuracion)
- [Cómo funcionan los puntos para tus clientes](../loyalty/guia-cliente)
- [Exportar el historial del ledger](../loyalty/exportar-ledger)
- [Integración con NetSuite](../integraciones/netsuite-fidelizacion)
- [Facturación electrónica con Nubefact](../facturacion/nubefact)
