---
title: Preguntas Frecuentes
description: Respuestas a las preguntas más comunes sobre el uso del Panel Administrador de MiTienda.pe.
---

# Preguntas Frecuentes

Respuestas a las preguntas más comunes sobre el uso del Panel Administrador de MiTienda.pe.

---

## Mi Tienda y Cuenta

**¿Puedo tener varias tiendas con una sola cuenta?**
Sí. Una cuenta puede gestionar múltiples tiendas. Al iniciar sesión puedes seleccionar con cuál trabajar.

**¿Cómo cambio mi contraseña?**
Desde la opción de perfil en la esquina superior del panel puedes actualizar tu contraseña.

**¿Puedo transferir mi tienda a otra persona?**
Contacta al soporte de MiTienda para gestionar el cambio de titularidad de una tienda.

---

## Productos y Catálogo

**¿Puedo importar productos desde Excel?**
El sistema acepta archivos CSV. Si tienes los datos en Excel, guarda el archivo como CSV antes de importarlo. Ver: [Importación masiva de productos](05-catalogo/01-productos.md#importación-masiva-carga-por-lotes).

**¿Cómo oculto un producto sin eliminarlo?**
Desactiva el switch **Publicado** en el producto. El producto seguirá existiendo en el sistema pero no será visible en tu tienda.

**¿Los productos sin stock se muestran en la tienda?**
Depende de la configuración del catálogo. Puedes elegir ocultarlos o mostrarlos (con indicación de agotado). Ver: [Configuración del Catálogo](05-catalogo/08-config-catalogo.md).

**¿Puedo tener el mismo producto en varias categorías?**
Sí. Un producto puede asignarse a múltiples categorías sin restricción.

**¿Cómo actualizo el stock de muchos productos a la vez?**
Desde **Catálogo → Productos → Stock** tienes una tabla editable para actualizar todos los stocks de una vez, o puedes importar un CSV. Ver: [Edición masiva de stock](05-catalogo/01-productos.md#edición-masiva-de-stock).

---

## Pedidos

**¿Puedo editar un pedido después de creado?**
No es posible modificar los productos de un pedido ya generado. Si hubo un error, gestiona una devolución o crea un nuevo pedido.

**¿Cómo cancelo un pedido?**
Cambia el estado de pago a "Rechazado" y el estado de envío permanece en "Pendiente". El stock se libera automáticamente si el producto tiene control de inventario.

**¿Puedo crear un pedido manualmente desde el panel?**
El Panel Administrador no tiene función de crear pedidos manualmente. Para ventas presenciales, usa el [POS](16-pos.md).

**¿Cómo descargo la etiqueta de envío de un pedido?**
En el detalle del pedido, haz clic en **Descargar → Etiqueta de Envío**. Ver: [Pedidos](03-ventas/01-pedidos.md#descargar-documentos-del-pedido).

---

## Pagos y Facturación

**¿Por qué un pago aparece como "Pendiente" si el cliente dice que pagó?**
Con métodos manuales (Yape, transferencia), el pago no se confirma automáticamente. Debes verificar que el dinero llegó a tu cuenta y luego cambiar el estado a "Pagado" manualmente.

**¿Puedo emitir una factura a nombre de una empresa?**
Sí. El cliente debe ingresar su RUC al momento del checkout. El sistema emite factura automáticamente en lugar de boleta.

**¿Cómo emito una nota de crédito por una devolución?**
Desde **Facturación → Documentos**, selecciona el comprobante a anular y emite una Nota de Crédito. Ver: [Facturación Electrónica](11-facturacion.md).

**¿Qué pasa si no tengo RUC activo, puedo igual usar facturación?**
No. Para emitir comprobantes electrónicos válidos ante SUNAT necesitas RUC activo con condición "Habido".

---

## Envíos

**¿Cómo sé en qué distritos puedo entregar?**
Desde **Reparto → Zonas de Reparto** puedes ver los distritos habilitados en cada zona de envío.

**¿Puedo ofrecer envío gratis?**
Sí. Puedes crear una zona de envío con tarifa S/ 0 para los distritos que quieras, o configurar una promoción de envío gratis desde **Marketing → Promociones v2**.

**¿Cómo creo una orden de envío con un courier?**
Desde el detalle del pedido, con el courier configurado, aparece el botón para crear la orden de envío directamente. Ver: [Reparto](10-envios.md).

---

## Marketing y Promociones

**¿Puedo crear un cupón de descuento?**
Sí. Desde **Marketing → Promociones v2**, crea una promoción con Activación = Cupón. Ver: [Promociones](06-marketing/01-promociones.md).

**¿Los descuentos se aplican automáticamente?**
Depende del tipo de activación. Las promociones automáticas sí. Las de cupón requieren que el comprador ingrese el código.

**¿Cómo sé si una promoción está funcionando?**
Desde **Reportes → Rendimiento de Promociones** puedes ver los usos y el monto de descuento otorgado.

---

## SEO y Marketing Digital

**¿Cómo mejoro el posicionamiento de mi tienda en Google?**
- Completa el SEO de tu tienda en **Tu Tienda → SEO**
- Completa el SEO de cada producto (meta título y descripción)
- Usa el blog para publicar contenido relevante a tu rubro
- Obtén un dominio propio profesional

**¿Cómo conecto Google Analytics a mi tienda?**
Desde **Tu Tienda → Notificaciones** ingresa tu ID de GA4 o GTM. Ver: [Notificaciones](12-configuracion/09-notificaciones.md).

---

## Integraciones

**¿Cómo sincronizo mis clientes con Mailchimp?**
Desde **Integraciones → Proveedores**, selecciona Mailchimp, ingresa tu API Key y List ID, y activa la integración. Ver: [Integraciones](/13-integraciones/04-email-marketing).

**¿Puedo conectar MiTienda con herramientas que no están en la lista?**
Sí. Usa los **Webhooks personalizados** para enviar eventos a cualquier URL, o la **API** para hacer consultas desde sistemas externos.

---

## Problemas Comunes

**Mi tienda no aparece en Google.**
Es normal si tu tienda es nueva. Google puede tardar semanas en indexarla. Asegúrate de que tu sitemap está enviado a Google Search Console.

**Los emails de confirmación de pedido no llegan a los clientes.**
Verifica que el email de tu tienda en **Tu Tienda → Información** es válido. Si el problema persiste, contacta a soporte.

**Un producto importado por CSV no apareció en mi tienda.**
Revisa el resultado de la importación (paso 5 del wizard). Puede que el SKU ya existía o que faltó algún campo obligatorio. El sistema muestra el error específico por fila.

**El comprobante electrónico de un pedido no se emitió automáticamente.**
Entra al detalle del pedido y emite el comprobante manualmente. Si el error persiste, verifica la conexión con Nubefact desde **Facturación → Proveedores → Test de conexión**.
