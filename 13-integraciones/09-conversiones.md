---
title: Conversiones en plataformas de publicidad
description: Configura el seguimiento de conversiones en Google Ads, Meta y TikTok para saber qué anuncios generan ventas reales.
---

# Conversiones en plataformas de publicidad

Una **conversión** es la acción que quieres que haga quien llega desde un anuncio: normalmente, completar una compra. Si no la configuras, las plataformas te muestran clics y visitas, pero no pueden decirte cuáles terminaron en venta — ni optimizar tus anuncios hacia las personas que sí compran.

Esta guía cubre la parte que depende de tu tienda. Para pegar los IDs de cada plataforma, ver [Google](/13-integraciones/02-google), [Facebook / Meta](/12-configuracion/06-facebook-meta) y [TikTok](/12-configuracion/07-tiktok).

## El dato que necesitas: la página de gracias

Todas las plataformas funcionan igual: cuentan una conversión cuando el comprador llega a una página determinada. En MiTienda esa página es la de confirmación de compra, y su dirección es:

```
https://tutienda.com/checkout/confirmacion/CODIGO
```

Donde `CODIGO` es el código de referencia del pedido, distinto en cada compra. Por eso **nunca configures la URL completa**: usa siempre la condición "la URL contiene" con este fragmento:

```
/checkout/confirmacion
```

::: warning Si migraste desde la versión anterior de la tienda
Antes esta página estaba en `/pagoconfirmado`. Si tus conversiones dejaron de registrarse, es casi seguro que tus disparadores siguen apuntando ahí. Ver [Enlaces de la tienda anterior](/12-configuracion/11-enlaces-antiguos).
:::

---

## Google Ads y Google Analytics 4

### Crear la conversión en GA4

1. Ingresa a [analytics.google.com](https://analytics.google.com)
2. Ve a **Administrador → Eventos → Crear evento**
3. Nombre del evento: `compra_finalizada`
4. Condición: `page_location` **contiene** `/checkout/confirmacion`
5. Guarda, vuelve a **Administrador → Conversiones** y marca el evento como conversión

### Importarla a Google Ads

1. En Google Ads, ve a **Objetivos → Conversiones → Nueva acción de conversión**
2. Elige **Importar → Google Analytics 4**
3. Selecciona el evento que acabas de crear

::: tip
Si ya tienes Google Analytics conectado en MiTienda, no necesitas instalar nada más. El evento se dispara solo cuando el comprador llega a la página de confirmación.
:::

---

## Meta (Facebook e Instagram)

MiTienda ya envía a Meta el evento **Purchase** de forma automática, tanto por el Pixel como por la Conversions API, siempre que tengas configurados el Pixel ID y el token CAPI.

**No tienes que crear ninguna regla.** Solo verifica en el Administrador de Eventos de Meta que el evento `Purchase` está llegando.

Si además creaste una conversión personalizada apuntando a una URL, revisa que la condición diga `/checkout/confirmacion` y no `/pagoconfirmado`.

---

## TikTok

1. En TikTok Ads Manager, ve a **Herramientas → Eventos → Eventos del sitio web**
2. Crea un evento de tipo **Complete Payment**
3. Método: **Reglas de URL**
4. Condición: la URL **contiene** `/checkout/confirmacion`

---

## Google Tag Manager

Si gestionas tus etiquetas desde GTM, el activador es el mismo:

| Campo | Valor |
|---|---|
| Tipo de activador | Vista de página |
| Se activa en | Algunas vistas de página |
| Condición | Page URL — contiene — `/checkout/confirmacion` |

---

## Cómo comprobar que funciona

La forma más segura es hacer un pedido de prueba real, aunque sea de un producto de S/ 1:

1. Completa una compra en tu tienda hasta ver la página de "¡Gracias por tu compra!"
2. Revisa la dirección en la barra del navegador: debe contener `/checkout/confirmacion/`
3. En **GA4 → Informes → Tiempo real**, comprueba que aparece el evento
4. En **Meta → Administrador de Eventos**, comprueba que llegó el `Purchase`

Las conversiones tardan en aparecer en los informes de Google Ads: cuenta entre 3 y 24 horas antes de preocuparte.

---

## Preguntas frecuentes

**¿Tengo que instalar algún código en mi tienda?**
No. Basta con pegar tus IDs en **Integraciones → Proveedores**. MiTienda inserta las etiquetas por ti.

**¿Por qué las cifras de Google Ads no coinciden con mis pedidos reales?**
Nunca coinciden exactamente. Las plataformas atribuyen la venta al día del clic, no al de la compra, y no registran a quien bloquea cookies. Úsalas para comparar campañas entre sí, no como reporte de ventas: para eso están tus [Reportes](/04-reportes).

**¿Puedo medir también quién agrega al carrito o inicia el checkout?**
Sí. En Meta y TikTok esos eventos se envían automáticamente. En GA4 puedes crear eventos con la misma lógica usando `/cart` y `/checkout` como condición de URL.

**Configuré todo y sigue sin registrar conversiones.**
Revisa en este orden: que el ID esté guardado en Integraciones, que la condición diga `contiene` y no `es igual a`, y que el fragmento sea exactamente `/checkout/confirmacion`.
