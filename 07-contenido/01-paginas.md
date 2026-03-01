# Páginas

**Ruta:** Panel Administrador → Contenido → Páginas

## ¿Qué son las Páginas?

Las páginas son contenido estático de tu tienda: "Quiénes somos", "Cómo compramos", "Contacto", etc. Puedes crearlas y editarlas libremente con tres editores diferentes.

## Crear una página

Ve a **Contenido → Páginas → Nueva Página**.

| Campo | Descripción |
|---|---|
| Título | Nombre de la página |
| Slug | URL de la página (ej: `quienes-somos`). Generado automáticamente, editable |
| Contenido | Cuerpo de la página (ver editores abajo) |
| Meta título | SEO: título para buscadores |
| Meta descripción | SEO: descripción para buscadores |

::: tip Nota
El formulario inicial de "Nueva Página" muestra solo los campos básicos (Título, Slug, Contenido). Los campos de publicación, SEO e imagen Open Graph aparecen en una fase posterior del editor.
:::

::: warning Límite de páginas
Tu plan tiene un límite máximo de páginas (ej: 20 páginas). Puedes ver el progreso en la barra indicadora del listado.
:::

## Editores disponibles

Puedes elegir entre tres modos de edición:

### Editor Visual (WYSIWYG)
Interfaz tipo Word. Ideal para usuarios sin conocimientos técnicos. Permite aplicar:
- Títulos (H1 a H4)
- Negrita, cursiva, subrayado
- Colores de texto
- Alineación
- Listas ordenadas y no ordenadas
- Links
- Imágenes
- Tablas
- Líneas divisoras

### Editor de Código (HTML)
Editor de código HTML con resaltado de sintaxis. Para usuarios que prefieren trabajar directamente con el código.

### Visual Builder

Constructor por bloques con interfaz drag & drop. Ideal para páginas más complejas con secciones, columnas e imágenes. Guarda el contenido en formato de bloques.

> Puedes cambiar el editor de una página en cualquier momento, pero el contenido previo puede verse afectado si cambias entre Visual Builder y los otros editores.

## Vista previa

Antes de publicar, puedes ver cómo quedará la página usando el botón **Vista Previa**.

## Publicar / Despublicar

Usa el switch **Publicado** para controlar la visibilidad. Una página despublicada no es accesible desde la tienda pero se conserva con todo su contenido.

## Preguntas frecuentes

**¿Cómo agrego la página al menú de navegación?**
Desde **Apariencia → Menú** agrega un elemento de tipo "Página" y selecciona la que creaste. Ver: [Menú](../08-apariencia/05-menu.md).

**¿Puedo duplicar una página?**
Por ahora no hay función de duplicar. Crea una nueva página y copia el contenido manualmente.

**¿Las páginas tienen URL personalizada?**
Sí. La URL es `tu-tienda.mitienda.pe/p/{slug}`. El slug es editable al crear o editar la página.
