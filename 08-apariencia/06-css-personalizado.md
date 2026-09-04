---
title: CSS Personalizado
description: Agrega reglas CSS propias para ajustar detalles del diseño de tu tienda.
---

# CSS Personalizado

**Ruta:** Panel Administrador → Apariencia → CSS personalizado

## ¿Qué es el CSS personalizado?

Es un editor donde escribes reglas de CSS propias para ajustar detalles visuales de tu tienda que no cubren las pantallas de [Colores](02-colores.md), [Tipografía](03-tipografia.md) o [Viñeta de Producto](04-tarjeta-producto.md).

Está pensado para retoques finos: separar un poco más dos bloques, cambiar el grosor de un borde, ocultar un elemento puntual. **Antes de escribir CSS, revisa si lo que quieres cambiar ya se configura desde Apariencia**, que es más seguro y sobrevive a las actualizaciones.

::: warning Solo se admite CSS
Por seguridad y compatibilidad, **no se admite JavaScript ni HTML**. Cualquier etiqueta o script que incluyas será removido automáticamente al guardar.

Si necesitas insertar contenido o scripts de terceros, usa [Shortcodes y embebidos](../07-contenido/08-shortcodes.md) o [Widgets y Plugins](../13-integraciones/03-widgets-plugins.md).
:::

## Escribir y publicar

El editor tiene resaltado de sintaxis y numeración de líneas. Cuando haces cambios aparece una barra inferior con dos acciones:

- **Publicar Cambios** guarda el CSS y lo aplica a tu tienda.
- **Descartar** revierte al último CSS guardado.

Al guardar, el sistema limpia el contenido y te devuelve el CSS ya depurado. Si escribiste algo no permitido, notarás que desapareció: no es un error del editor, es la limpieza automática.

## Recomendaciones

- **Cambia de a poco y verifica.** Publica un ajuste, mira tu tienda, y recién entonces sigue.
- **Revisa en celular.** La mayoría de tus visitas llega desde el móvil, y una regla que se ve bien en escritorio puede romper el diseño en pantalla chica.
- **Evita reglas demasiado amplias.** Un selector genérico puede afectar pantallas que no tenías en mente, como el checkout.
- **Guarda una copia de tu CSS** en un archivo aparte antes de un cambio grande, para poder volver atrás.

## Preguntas frecuentes

**¿Puedo romper mi tienda con esto?**
Puedes afectar cómo se ve, no cómo funciona: las ventas siguen operando. Si algo se ve mal, borra la regla que lo causó y publica de nuevo.

**Escribí una regla y no pasa nada.**
Suele ser porque otra regla del tema tiene más prioridad. Verifica que el selector sea el correcto usando el inspector del navegador sobre el elemento que quieres cambiar.

**¿El CSS se pierde al cambiar de plantilla o de colores?**
No. Se guarda aparte y se sigue aplicando. Ojo: si cambias de plantilla, tus selectores podrían dejar de coincidir con los elementos nuevos.

**¿Puedo agregar Google Analytics o un pixel desde acá?**
No, porque requieren JavaScript. Usa las pantallas de [Google](../13-integraciones/02-google.md) o [Facebook / Meta](../12-configuracion/06-facebook-meta.md).
