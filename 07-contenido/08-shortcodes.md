---
title: Shortcodes y embebidos
description: Inserta widgets de terceros como mapas de tiendas (Storemapper) dentro del contenido de tus páginas, blog o descripción de producto.
---

# Shortcodes y embebidos

Algunos widgets de terceros (como mapas de tiendas) necesitan inyectar código JavaScript en tu tienda para funcionar. Por seguridad, MiTienda **no permite pegar scripts directamente** en el contenido de tus páginas (un script malicioso podría afectar a tus visitantes).

Para resolverlo, MiTienda usa un sistema de **shortcodes**: pequeños marcadores de texto que escribes dentro del contenido y MiTienda los reemplaza por el widget correspondiente al renderizar la página.

## ¿Dónde puedo usar shortcodes?

Los shortcodes funcionan en estos lugares:

| Sección | Editor | Cómo se ve la URL |
| --- | --- | --- |
| Páginas estáticas | Editor de Contenido → Páginas | `/p/{slug}` |
| Posts del blog | Editor de Contenido → Blog | `/blog/{slug}` |
| Descripción de producto | Editor de Catálogo → Producto → Descripción | `/producto/{slug}` |
| Bloque "HTML personalizado" del home | Apariencia → Plantilla → bloque HTML | `/` |

::: tip
Los shortcodes son texto plano: escribilos dentro de cualquier párrafo o línea del editor visual o de código. MiTienda los detecta al renderizar la página.
:::

## Shortcodes disponibles

### Storemapper — mapa de tiendas físicas

[Storemapper](https://www.storemapper.co) es un servicio externo (de pago) que te permite mostrar un mapa interactivo con las ubicaciones de tus tiendas físicas. Tus clientes pueden buscar sucursales por dirección o geolocalización.

**Cuándo usarlo:** cuando tenés tiendas físicas y querés que tus clientes online sepan dónde encontrarte. Es ideal para una página tipo "Encuéntranos" o "Nuestras tiendas".

#### Paso 1 — Configurá tu cuenta en Storemapper

1. Creá una cuenta en [storemapper.co](https://www.storemapper.co) (tienen plan gratuito limitado y planes pagos).
2. Cargá tus ubicaciones desde el panel de Storemapper (dirección, horarios, teléfono, etc.).
3. Andá a **Embed** o **Install** dentro de Storemapper y copiá el **ID de tu widget**. Tiene un formato como `29720-Bfq2LEYgpPsVNnZ9` (un número seguido de un guion y caracteres).

#### Paso 2 — Insertá el shortcode en MiTienda

En el editor de contenido de la página donde querés mostrar el mapa, escribí en la posición exacta:

```
[storemapper id="TU_ID_DE_STOREMAPPER"]
```

Por ejemplo:

```
[storemapper id="29720-Bfq2LEYgpPsVNnZ9"]
```

Guardá la página. Cuando un visitante abra esa URL, verá tu mapa interactivo en el lugar donde colocaste el shortcode.

::: warning Importante
- El `id` va entre comillas dobles (`"`) o simples (`'`), ambos funcionan.
- Si el visitante tiene una conexión lenta o JavaScript desactivado, verá temporalmente un mensaje "Cargando mapa de tiendas..." antes de que aparezca el mapa.
- Storemapper es un servicio externo; si está caído o cancelaste tu cuenta, el mapa no aparecerá. MiTienda no almacena las ubicaciones.
:::

#### ¿Cómo encuentro mi ID de Storemapper?

1. Iniciá sesión en [storemapper.co](https://www.storemapper.co).
2. En el menú principal andá a **Settings** → **Install** (o **Embed Code**).
3. Verás un bloque de código HTML que dice algo como:
   ```html
   <script data-storemapper-id="29720-Bfq2LEYgpPsVNnZ9" ...>
   ```
4. Copiá el valor de `data-storemapper-id` — es el ID que vas a pegar en el shortcode de MiTienda.

#### Ejemplo de página

Una página "Encuéntranos" típica se ve así en el editor:

```
Visitanos en cualquiera de nuestras tiendas físicas.
Encontranos también con nuestro mapa interactivo:

[storemapper id="29720-Bfq2LEYgpPsVNnZ9"]

¿Tenés dudas? Escribinos por WhatsApp al +51 999 999 999.
```

Y se renderiza así en el storefront:

> Visitanos en cualquiera de nuestras tiendas físicas.
> Encontranos también con nuestro mapa interactivo:
>
> *[mapa interactivo de Storemapper]*
>
> ¿Tenés dudas? Escribinos por WhatsApp al +51 999 999 999.

---

### Visor 3D y Realidad Aumentada

Muestra tu producto en 3D y agrega un botón **Ver en AR** para que el comprador
lo coloque en su propia habitación con la cámara del celular, sin instalar nada.
El modelo 3D se genera automáticamente a partir de la foto del producto.

**Cuándo usarlo:** muebles y decoración (sillas, sofás, mesas, lámparas), donde
la duda de compra es "¿me va a entrar? ¿cómo se ve en mi sala?".

::: warning Es un servicio adicional
El visor 3D/AR no viene incluido en los planes: se contrata aparte con MiTienda.
Además, el proveedor sólo habilita el visor en los dominios que le informamos, así
que **escribinos antes** — no alcanza con escribir el shortcode.
:::

#### En la descripción de un producto

Escribí el shortcode solo, sin nada más:

```
[ar]
```

MiTienda completa el resto: usa la **foto principal** del producto y sus
**medidas** (Alto / Largo / Ancho de la pestaña de medidas), convertidas
automáticamente a centímetros.

::: tip Cargá las medidas
Sin medidas el visor adivina el tamaño, y en AR el producto puede verse enorme o
diminuto. Completá Alto, Largo y Ancho en la ficha del producto.
:::

Si tu producto es un sofá, una mesa o una lámpara, indicá la categoría para que
se apoye bien en el piso:

```
[ar tipo="sofa"]
```

Valores válidos de `tipo`: `chair` (silla), `sofa`, `table` (mesa), `lamp`
(lámpara), `other` (otro). Si no lo indicás, se usa `other`.

#### En una página o en el blog

Fuera de una ficha de producto no hay de dónde sacar la foto ni las medidas, así
que hay que pasarlas a mano:

```
[ar imagen="https://mitienda.pe/uploads/silla-nordica.jpg" ancho="60" alto="90" profundidad="60" tipo="chair"]
```

| Atributo | Obligatorio | Qué va |
| --- | --- | --- |
| `imagen` | Sí (fuera de un producto) | URL pública de la foto. Un solo objeto sobre fondo limpio da el mejor modelo. |
| `ancho`, `alto`, `profundidad` | Recomendado | Medidas reales **en centímetros**, solo números. |
| `unidad` | No | Si preferís escribir las medidas en otra unidad: `m`, `mm`, `pulgadas`. Por defecto, centímetros. |
| `tipo` | No | Categoría del objeto (ver arriba). |

#### Qué ve el comprador

La primera vez que alguien abre ese producto, el modelo se está generando y se
muestra la foto con un indicador de carga. A partir de ahí queda guardado y los
demás visitantes lo ven al instante.

::: warning Si cambiás la foto, se genera un modelo nuevo
El modelo está atado a la foto y a las medidas. Si editás cualquiera de las dos,
se genera de nuevo (y el primer visitante vuelve a esperar). Guardar el producto
sin cambiar esos valores no genera nada nuevo.
:::

#### Si no aparece nada

- El visor todavía no está habilitado para tu tienda (escribinos).
- Tu dominio no fue informado al proveedor — pasa si cambiaste de dominio
  después de activarlo.
- El producto no tiene foto principal.
- La foto no es accesible públicamente.

---

## Preguntas frecuentes

**¿Puedo usar varios shortcodes en una misma página?**
Sí, sin límite. Cada uno se renderiza por separado.

**¿Puedo combinar shortcodes con HTML o texto normal?**
Sí. El shortcode es solo una línea más del contenido. El resto del texto, imágenes y formato funciona normalmente.

**El shortcode aparece como texto en mi página, no como mapa. ¿Qué pasó?**
Revisá:
- Que esté escrito tal cual: `[storemapper id="..."]`, todo en una sola línea, sin espacios extra.
- Que el ID esté entre comillas.
- Que el editor visual no haya envuelto el shortcode en etiquetas (cambiá al editor de código HTML para verificarlo).
- Que tu cuenta de Storemapper esté activa.

**¿Puedo agregar otros widgets?**
Además de Storemapper y del visor 3D/AR, hay shortcodes para insertar productos, listas de productos, categorías y marcas dentro del contenido (los encontrás en el botón **Insertar shortcode** del editor de páginas). Otros widgets de terceros (Crisp, Calendly, etc.) se agregan por demanda — escribinos por el chat de soporte si necesitás uno específico.

**¿Cómo desactivo el mapa temporalmente?**
Editá la página y borrá la línea del shortcode. Para reactivarlo, volvé a pegarla.

**¿El mapa de Storemapper se carga en móvil?**
Sí, Storemapper es responsivo y se adapta a cualquier tamaño de pantalla.

**¿MiTienda cobra por usar Storemapper?**
No. MiTienda solo provee la integración técnica del shortcode sin costo adicional. El servicio de Storemapper se contrata directamente con ellos y tiene sus propios planes y precios.
