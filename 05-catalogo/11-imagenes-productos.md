---
title: Imágenes de productos
description: Formatos, tamaño mínimo, peso máximo, medidas recomendadas y cuántas imágenes puedes subir por producto según tu plan en MiTienda.pe.
---

# Imágenes de productos

**Ruta:** Panel Administrador → Catálogo → Productos → (abre un producto) → Imágenes

## Requisitos

| Requisito | Valor |
|---|---|
| Formatos | **JPG, PNG o WebP** |
| Tamaño mínimo | **600 × 600 píxeles** |
| Peso máximo | **10 MB** por imagen |

Si la imagen no cumple, el panel no la sube y te avisa (por ejemplo, **"Imagen muy pequeña. Mínimo 600x600 píxeles"**).

::: warning Fotos HEIC y GIF
El panel no acepta HEIC ni GIF para productos. Si pasaste fotos de un iPhone a tu computadora y quedaron en HEIC, conviértelas a JPG antes de subirlas.
:::

## Medidas recomendadas

Las imágenes de producto se recortan con la proporción que elegiste en [Viñeta de Producto](../08-apariencia/04-tarjeta-producto.md):

| Proporción de la viñeta | Medida recomendada |
|---|---|
| Cuadrada (1:1) | 1200 × 1200 píxeles |
| Vertical (4:5) | 1200 × 1500 píxeles |

Recomendaciones:

- Usa la misma proporción en todas las fotos para que el catálogo se vea parejo.
- Deja un margen alrededor del producto: en el listado la imagen se muestra pequeña.
- Un fondo blanco o neutro hace que los productos se vean más ordenados.
- No hace falta subir archivos muy pesados: con 1 o 2 MB por foto es suficiente.

## Cuántas imágenes puedes subir por producto

| Plan | Imágenes por producto |
|---|---|
| Micro | 6 |
| Small | 6 |
| Medium | 12 |
| Large | Sin límite |

Al llegar al límite verás el mensaje **"Has alcanzado el límite de imágenes por producto de tu plan"**. Para subir otra, quita una imagen o [cambia de plan](../23-cuenta/01-pagar-y-renovar.md#cambiar-de-plan-al-renovar). Ver también [Planes y Precios](../19-planes-y-precios.md).

## Subir una imagen

1. Ve a **Catálogo → Productos** y abre el producto.
2. En **Imágenes**, haz clic en **Añadir imagen** (o **Añadir primera imagen** si el producto no tiene ninguna).
3. Elige cómo agregarla:
   - **Subir nueva**: haz clic en **Seleccionar imagen** y elige el archivo.
   - **Elegir de la galería**: usa una imagen que ya subiste en [Contenido → Imágenes](../07-contenido/05-galeria.md).
4. Si subes una imagen nueva, ajusta el recorte y haz clic en **Aplicar recorte**. Si no quieres recortar, usa **Usar imagen completa**.
5. Revisa la vista previa y haz clic en **Subir imagen** (o en **Vincular imagen** si la elegiste de la galería).

::: tip Las imágenes se suben después de crear el producto
El formulario de **Nuevo Producto** no tiene imágenes. Crea el producto primero y luego agrégalas desde la edición.
:::

## Ordenar y elegir la imagen principal

Arrastra las imágenes para cambiar el orden. **La primera es la principal** (lleva la etiqueta **Principal**): es la que se muestra en los listados de productos de tu tienda.

## Subir muchas imágenes a la vez (ZIP)

En el plan **Large** puedes subir un archivo ZIP con muchas imágenes y vincularlas a tus productos por SKU:

1. Ve a **Contenido → Imágenes → Subir imágenes** y elige **Lote (ZIP)**.
2. Nombra cada imagen con el SKU del producto: `SKU.jpg` para una imagen, o `SKU=1.jpg`, `SKU=2.jpg` para varias.
3. Haz clic en **Seleccionar ZIP** (máximo **50 MB**) y luego en **Procesar ZIP**.

Al terminar verás cuántas imágenes se vincularon, cuántas no coincidieron con ningún SKU y cuántas se omitieron por superar el límite de imágenes del producto. Las que no coinciden se guardan igual en la galería.

## Preguntas frecuentes

**Subí una imagen y se ve cortada en la tienda.**
La tienda muestra las imágenes con la proporción de [Viñeta de Producto](../08-apariencia/04-tarjeta-producto.md). Vuelve a subirla con esa proporción o ajusta el recorte al subirla.

**¿Las variantes pueden tener su propia imagen?**
Sí. Ver [Atributos y Variantes](05-atributos.md).

**¿Qué medidas tienen las demás imágenes de la tienda?**
El carrusel, el logo y otras imágenes tienen sus propios requisitos. Ver [Carrusel de Portada](../07-contenido/04-carrusel.md) y [Configuración de Apariencia](../08-apariencia/01-general.md).
