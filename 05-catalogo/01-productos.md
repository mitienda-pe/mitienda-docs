# Productos

**Ruta:** Panel Administrador → Catálogo → Productos

## ¿Qué es el módulo de Productos?

Aquí creas y gestionas todo tu catálogo: productos simples, productos con variantes (tallas, colores, etc.), precios, stock, imágenes y mucho más.

## Listado de productos

Muestra todos tus productos con opciones de búsqueda y filtros. Desde aquí puedes acceder rápidamente a editar, publicar o despublicar cualquier producto.

## Crear un producto

Ve a **Catálogo → Productos → Nuevo producto**.

::: tip Formulario simplificado
El formulario de **Nuevo Producto** es simplificado y solo incluye los campos básicos (nombre, SKU, precio, stock y categoría). Los campos avanzados como imágenes, videos, documentos adjuntos, peso, dimensiones, SEO y variantes están disponibles una vez que el producto es creado, en la vista de edición completa.
:::

### Información básica

| Campo | Descripción |
|---|---|
| Nombre | Nombre del producto (aparece en la tienda) |
| SKU | Código interno único del producto |
| Código de barras | EAN o UPC (opcional) |
| Descripción | Descripción larga con editor de texto enriquecido |
| Descripción corta | Texto breve (máximo 300 caracteres). Puede generarse con IA |

### Precios e Impuestos

| Campo | Descripción |
|---|---|
| Precio con IGV (S/) | Precio de venta con IGV incluido |
| Precio sin IGV | Se calcula automáticamente o puedes ingresarlo manual |
| Afectación IGV | Gravado (18%), Exonerado o Inafecto |

### Stock

| Campo | Descripción |
|---|---|
| Stock | Cantidad disponible |
| Stock ilimitado | Actívalo si no deseas controlar inventario |

### Peso y dimensiones

Necesarios para el cálculo de envío por peso con couriers.

| Campo | Unidades |
|---|---|
| Peso | kg, g, lb, oz |
| Alto, Ancho, Largo | cm, m, in |

### Imágenes y videos

- Sube múltiples imágenes (JPG, PNG, WebP)
- Reordénalas con drag & drop
- Sube un video del producto (MP4 o link de YouTube/Vimeo)
- Adjunta documentos como fichas técnicas (PDF, DOC, DOCX)

### Clasificación

Asigna el producto a:
- Categorías (puede estar en múltiples)
- Marca
- Gamma (sub-marca)
- Etiquetas

### SEO del producto

| Campo | Descripción |
|---|---|
| Meta título | Título para buscadores (máx. 60 caracteres) |
| Meta descripción | Descripción para buscadores (máx. 160 caracteres) |
| Slug | URL amigable del producto |
| Imagen Open Graph | Imagen que se muestra al compartir en redes sociales |

> **Asistencia con IA:** Los campos de meta título, meta descripción y descripción corta tienen un botón de IA que genera el texto automáticamente basándose en el nombre, descripción y categorías del producto.

### Publicación

Activa o desactiva el switch **Publicado** para controlar si el producto es visible en tu tienda.

## Variantes de producto

Las variantes permiten ofrecer un mismo producto en diferentes combinaciones de atributos, como Talla + Color.

**Cómo crear variantes:**
1. En la pestaña **Variantes** del producto, selecciona los atributos que aplican (ej: Talla, Color)
2. El sistema genera automáticamente todas las combinaciones posibles
3. Define precio y stock para cada variante individualmente

Ver: [Atributos y Variantes](05-atributos.md)

## Edición masiva de precios

**Ruta:** Catálogo → Productos → Precios

Tabla editable donde puedes actualizar los precios de todos tus productos sin entrar a cada uno. Escribe directamente en las celdas y guarda al terminar.

También puedes **importar precios por CSV** con las columnas: `producto_id` o `sku`, `variante_id` o `variante_sku`, `variante_precio`.

## Edición masiva de stock

**Ruta:** Catálogo → Productos → Stock

Igual que los precios: tabla editable para actualizar el stock de todos tus productos en una sola pantalla.

También puedes **importar stock por CSV** con las columnas: `producto_id` o `sku`, `variante_id` o `variante_sku`, `variante_stock`.

## Reordenamiento masivo

**Ruta:** Catálogo → Productos → Orden

Ajusta el orden en que aparecen los productos en tu tienda. Arrastra para reordenar o importa el orden por CSV.

## Importación masiva (Carga por lotes)

**Ruta:** Catálogo → Productos → Importar

Carga cientos de productos a la vez usando un archivo CSV. El proceso tiene 5 pasos:

1. **Subir archivo CSV** — sube tu archivo con los datos de los productos
2. **Mapeo de columnas** — indica qué columna del CSV corresponde a qué campo del sistema
3. **Vista previa** — revisa cómo quedarán los productos antes de importarlos
4. **Confirmación** — confirma la importación
5. **Resultado** — el sistema muestra cuántos se importaron correctamente y cuáles fallaron, con el motivo del error

## Exportar productos

Puedes exportar tu catálogo en CSV. Elige las columnas que necesitas entre 23 opciones disponibles (nombre, SKU, precio, stock, categoría, etc.).

## Preguntas frecuentes

**¿Cuántos productos puedo tener?**
El límite depende de tu plan de suscripción. Consulta en **Tu Tienda → Plan y Suscripción**.

**¿Puedo tener un producto en varias categorías?**
Sí, un producto puede asignarse a múltiples categorías simultáneamente.

**¿Cómo oculto un producto temporalmente sin eliminarlo?**
Desactiva el switch **Publicado** en el producto. Seguirá existiendo pero no será visible en tu tienda.

**¿Qué pasa si importo un CSV con un SKU que ya existe?**
El sistema lo detecta en la vista previa del paso 3 y te lo indica. Puedes decidir si actualizar el producto existente o ignorarlo.

**¿La IA de descripciones consume créditos adicionales?**
No, la asistencia de IA está incluida en tu plan sin costo adicional.

**¿Cómo sincronizo el stock con NetSuite?**
Si tienes la integración NetSuite activa, el stock se sincroniza automáticamente. Ver: [NetSuite](../14-netsuite.md).
