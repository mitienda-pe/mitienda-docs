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

**¿Puedo agregar otros widgets además de Storemapper?**
Por ahora MiTienda soporta solo el shortcode de Storemapper. Otros widgets (Crisp, Calendly, etc.) se agregarán por demanda — escribinos por el chat de soporte si necesitás uno específico.

**¿Cómo desactivo el mapa temporalmente?**
Editá la página y borrá la línea del shortcode. Para reactivarlo, volvé a pegarla.

**¿El mapa de Storemapper se carga en móvil?**
Sí, Storemapper es responsivo y se adapta a cualquier tamaño de pantalla.

**¿MiTienda cobra por usar Storemapper?**
No. MiTienda solo provee la integración técnica del shortcode sin costo adicional. El servicio de Storemapper se contrata directamente con ellos y tiene sus propios planes y precios.
