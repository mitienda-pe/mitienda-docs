---
title: Enlaces de la tienda anterior
description: Qué pasó con las direcciones de tu tienda tras la migración, qué se redirige solo y qué debes actualizar a mano.
---

# Enlaces de la tienda anterior

Si tu tienda migró a la nueva versión, algunas direcciones cambiaron de forma. Esta página explica qué se arregla solo, qué tienes que tocar y por qué Google Search Console puede estar avisándote de errores que no lo son.

## Lo que no tienes que hacer

**Los enlaces antiguos siguen funcionando.** La tienda los redirige automáticamente a su dirección nueva, conservando los parámetros de tus campañas (`utm_source`, `gclid`, `fbclid`). Quien haga clic en un enlace viejo llega al lugar correcto.

Esto incluye enlaces compartidos en redes, guardados por tus clientes, impresos en material antiguo o indexados por Google.

::: tip Las fichas de producto no cambiaron
`tutienda.com/producto/nombre-del-producto` es idéntica en ambas versiones. Si tus anuncios apuntan a productos concretos, no hay nada que hacer.
:::

---

## Lo que sí debes actualizar

### 1. El seguimiento de conversiones

Es lo único que un redirect no puede arreglar. La página de gracias cambió de dirección:

| | |
|---|---|
| Antes | `/pagoconfirmado` |
| Ahora | `/checkout/confirmacion` |

Si tus conversiones dejaron de registrarse tras la migración, esta es la causa. Ver [Conversiones en plataformas de publicidad](/13-integraciones/09-conversiones).

### 2. La URL final de tus anuncios activos

Aunque el redirect funciona, conviene poner la dirección nueva directamente en el anuncio: Google Ads penaliza levemente los destinos que redirigen, y algunas plataformas no propagan bien los parámetros a través del salto.

---

## Equivalencias principales

| Dirección anterior | Dirección actual |
|---|---|
| `/catalogo` · `/catalogo/productos` | `/productos` |
| `/catalogo/categoria/nombre` | `/categoria/nombre` |
| `/catalogo/marca/nombre` | `/marca/nombre` |
| `/producto/nombre` | `/producto/nombre` *(sin cambios)* |
| `/p/nombre-de-pagina` | `/pagina/nombre-de-pagina` |
| `/terminosycondiciones` | `/politicas/terminos` |
| `/librodereclamaciones` | `/libro-de-reclamaciones` |
| `/carritoweb` | `/cart` |
| `/micuenta/compras` | `/mis-compras` |
| `/pagoconfirmado` | `/checkout/confirmacion/CODIGO` |

Los filtros del catálogo también cambiaron de nombre (`?buscar=` pasó a `?q=`, `?ordenadopor=` a `?orden=`). También se redirigen solos.

---

## Los avisos de Google Search Console

Tras una migración es normal ver avisos en Search Console. **La mayoría no son errores de tu tienda.** Esto es lo que significa cada uno:

| Aviso | ¿Hay que hacer algo? |
|---|---|
| **Página alternativa con etiqueta canónica adecuada** | No. Son las combinaciones de filtros del catálogo apuntando correctamente a su página principal. Es informativo, no un error |
| **Página con redirección** | No. Son precisamente los enlaces antiguos redirigiendo bien. Es señal de que funciona |
| **No se ha encontrado (404)** | Suelen ser productos que diste de baja o direcciones que ya no existen. Bajan solas conforme Google vuelve a rastrear |
| **Duplicada: Google eligió otra canónica** | Casi siempre son variantes de una misma página (con y sin `www`, con filtros). Google elige una y funciona |
| **Rastreada: actualmente sin indexar** | Páginas que Google vio pero decidió no indexar, normalmente resultados de filtros. No afecta a tus páginas de producto |

::: warning Dale tiempo
Search Console muestra datos con semanas de retraso. Después de una migración, cuenta entre **dos y cuatro semanas** antes de sacar conclusiones: buena parte de lo que aparece hoy son direcciones que ya funcionan y que Google todavía no ha vuelto a visitar.
:::

---

## Preguntas frecuentes

**¿Perdí mi posicionamiento en Google?**
Los redirects están hechos de forma que Google transfiere el posicionamiento de la dirección antigua a la nueva. Puede haber movimiento durante algunas semanas mientras reindexa.

**Un cliente me dice que su enlace guardado no funciona.**
Pídele la dirección exacta y escríbenos desde [Contacto y Soporte](/18-contacto). Si hay un caso que no estamos redirigiendo, lo agregamos.

**¿Tengo que volver a enviar mi sitemap?**
No. Se genera solo y se actualiza cuando cambias productos o páginas. Puedes comprobar su dirección en **Integraciones → Proveedores → Google**.

**Mis anuncios llevan a una página que no muestra lo que esperaba.**
Revisa si el enlace lleva filtros del catálogo antiguos. Lo más seguro es rehacer el enlace navegando por tu propia tienda hasta la página que quieres anunciar y copiar la dirección de la barra del navegador.
