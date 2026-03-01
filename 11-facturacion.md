# Facturación Electrónica

**Ruta:** Panel Administrador → Facturación

## ¿Qué es la Facturación Electrónica?

MiTienda se integra con **Nubefact** (proveedor autorizado por SUNAT) para emitir comprobantes electrónicos: boletas y facturas. Una vez configurado, los comprobantes se generan automáticamente al confirmar el pago de un pedido.

## Requisitos previos

Para usar facturación electrónica necesitas:
- **RUC activo** con condición "Habido" en SUNAT
- Una cuenta en **Nubefact** (puedes crearla en nubefact.com)
- El **token de acceso** de tu cuenta Nubefact
- Las **series** de tus documentos (ej: B001 para boletas, F001 para facturas)

## Configurar Nubefact

Ve a **Facturación → Proveedores** y completa:

| Campo | Descripción |
|---|---|
| Token de acceso | API token de tu cuenta Nubefact |
| RUC del emisor | Tu RUC empresarial |
| Razón social | Nombre legal de tu empresa |
| Dirección del emisor | Dirección fiscal registrada en SUNAT |
| Serie de boleta | Ej: B001 |
| Serie de factura | Ej: F001 |
| Serie de nota de crédito | Ej: BC01 (boleta) o FC01 (factura) |
| Modo | Sandbox (pruebas) o Producción |

> Usa el **modo sandbox** para hacer pruebas con comprobantes de prueba antes de pasar a producción. En modo sandbox, los comprobantes no son válidos ante SUNAT.

Haz clic en **Test de conexión** para verificar que las credenciales son correctas.

## Tipos de comprobante

| Comprobante | Cuándo se emite |
|---|---|
| **Boleta** | Para compras de personas naturales (con DNI) |
| **Factura** | Para compras de empresas (con RUC) |
| **Nota de crédito** | Para anulaciones o devoluciones |

## Emisión automática

Una vez configurado, cada vez que un pedido cambia a estado **Pagado**, el sistema emite automáticamente el comprobante correspondiente (boleta o factura según los datos del comprador).

El comprobante queda asociado al pedido y puedes verlo en el detalle del pedido con su número de serie y un enlace para descargarlo en PDF.

## Emisión manual

Si necesitas emitir un comprobante manualmente, puedes hacerlo desde el detalle de un pedido pagado. Ve al pedido correspondiente en **Ventas → Pedidos** y utiliza la opción de emisión de comprobante.

## Historial de documentos

Ve a **Facturación → Documentos** para ver todos los comprobantes emitidos, con opción de descargar el PDF en tres formatos:
- **A4** — estándar para enviar por email
- **Ticket** — formato térmico para imprimir
- **80mm** — para impresora de tickets de 80mm

## Notas de crédito (anulaciones y devoluciones)

Para anular o hacer una devolución de un comprobante, emite una Nota de Crédito desde el detalle del documento. Requiere indicar el motivo (anulación, devolución, descuento, etc.).

## Preguntas frecuentes

**¿Cuánto cuesta usar Nubefact?**
Nubefact cobra por comprobante emitido. Consulta sus tarifas directamente en nubefact.com. MiTienda no cobra un adicional por esta integración.

**¿Qué pasa si un comprobante falla en emitirse?**
El sistema reintenta automáticamente. Si el error persiste, verás el pedido marcado con un error de facturación y podrás emitir el comprobante manualmente.

**¿Puedo emitir comprobantes de forma retroactiva?**
Sí, desde el detalle de un pedido pagado puedes emitir el comprobante manualmente si no se generó automáticamente.

**¿Los compradores reciben el comprobante por email?**
Sí. El sistema envía automáticamente el comprobante al email del comprador al momento de emitirlo.

**¿Qué es la serie del documento?**
La serie es el prefijo que identifica cada punto de emisión (ej: B001, B002). Si tienes varias sucursales, puedes tener series diferentes por sucursal. Esto se configura también en Nubefact.
