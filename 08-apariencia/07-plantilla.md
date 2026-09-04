---
title: Plantilla
description: Arma el home y las demás páginas de tu tienda con bloques ordenados en secciones y columnas.
---

# Plantilla

**Ruta:** Panel Administrador → Apariencia → Plantilla

## ¿Qué es la Plantilla?

Es el constructor de las páginas de tu tienda. Te permite agregar bloques de contenido —carrusel, categorías, marcas, listas de productos— y ordenarlos en secciones y columnas, arrastrándolos donde quieras.

Se edita **página por página**: cada una tiene su propia pestaña.

| Página | Es |
|---|---|
| Home | La portada de tu tienda |
| Catálogo | El listado de productos |
| Detalle Producto | La ficha de un producto |
| Carrito | El carrito de compras |
| Checkout | El proceso de pago |
| Pago Confirmado | La pantalla final tras la compra |

En todas, salvo el Home a medida, los bloques que agregues se ubican **alrededor** del contenido propio de la página, en dos zonas: **Arriba del contenido** y **Abajo del contenido**. El contenido central (la ficha, el carrito, el checkout) no se reemplaza.

## El modo del Home

El Home es especial: antes de armarlo, eliges cuánto quieres construir tú.

| Modo | Qué hace |
|---|---|
| **Carrusel + catálogo** | El home clásico: tu carrusel y debajo todo el catálogo paginado. Puedes agregar bloques arriba y abajo |
| **Home completo** | Además del carrusel, la tienda arma sola tus categorías, marcas, listas y destacados. Puedes agregar bloques arriba y abajo |
| **Home a medida** | Tú defines el home entero con bloques. El carrusel y el catálogo aparecen **solo si los agregas** |

::: warning Si eliges "Home a medida", empiezas de cero
En los otros dos modos la tienda arma la portada sola y tus bloques la acompañan. En "Home a medida" nada aparece por defecto: si no agregas el carrusel, no hay carrusel; si no agregas productos, no hay productos.
:::

## Armar una página

### Secciones y columnas

Una página se compone de **secciones** apiladas. Cada sección se divide en columnas, y en cada columna colocas un bloque.

Al presionar **Agregar sección** eliges cómo se reparte el ancho:

| Distribución | Columnas |
|---|---|
| 1 columna | Ancho completo |
| 2 columnas | Mitad y mitad |
| 2 : 1 y 1 : 2 | Dos columnas desiguales |
| 3 : 1 y 1 : 3 | Una columna dominante y una angosta |
| 3 columnas | Tres iguales |
| 4 columnas | Cuatro iguales |

### Bloques predefinidos

Se arrastran desde el panel lateral al área de contenido:

| Bloque | Muestra |
|---|---|
| Carrusel | El slider de banners principal |
| Categorías | Una cuadrícula de categorías |
| Marcas | Galería de marcas con su logo |
| Productos Destacados | Los productos más populares, en automático |
| Lista de Productos | Una lista curada por ti. Puedes agregar varias |
| Combos | Tus combos de productos |

### Componentes HTML propios

Además de los bloques predefinidos, puedes asignar a una columna un **componente HTML** de los que creaste en [Bloques de Plantilla](../07-contenido/06-componentes.md). Haz clic en la columna y elige el componente.

## Configurar un bloque

El ícono de configuración de cada bloque abre sus opciones:

- **Título personalizado**: reemplaza el título por defecto del bloque.
- **Color de fondo**: el fondo de ese bloque.
- **Cantidad**: cuántos elementos mostrar (banners, categorías, marcas, combos).
- **Selección de elementos**: en Categorías, Marcas, Listas y Combos puedes elegir cuáles mostrar. **Déjalo vacío para mostrar todos.**

En el bloque de Listas de Productos hay dos cantidades distintas: **cuántas listas** se muestran y **cuántos productos por lista**.

## Guardar

Los cambios se aplican al presionar **Guardar página**. Se guarda **la pestaña en la que estás**: si editaste el Home y el Catálogo, guarda cada uno.

::: danger Si aparece un error de carga, no guardes
Cuando la plantilla no se pudo leer, verás un mensaje pidiéndote recargar antes de editar. Guardar en ese estado **sobrescribiría tu plantilla con una vacía**. Recarga la página primero.
:::

## Preguntas frecuentes

**¿Puedo ver cómo queda antes de publicar?**
Elige el modo del Home y revisa la vista previa antes de guardar. Para el resto, guarda y abre tu tienda en otra pestaña.

**Agregué un bloque y no aparece en mi tienda.**
Verifica que guardaste esa pestaña, y que el bloque tenga contenido: un bloque de Combos sin combos creados, o de Marcas sin marcas con logo, se muestra vacío.

**¿Qué pasa con mis bloques si cambio el modo del Home?**
Se conservan. Lo que cambia es qué arma la tienda sola alrededor de ellos.

**¿Cuál es la diferencia entre esto y Bloques de Plantilla?**
En [Bloques de Plantilla](../07-contenido/06-componentes.md) creas el contenido HTML. Aquí decides en qué página y en qué posición aparece.
