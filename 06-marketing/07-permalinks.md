# Permalinks de Carrito

**Ruta:** Panel Administrador → Catálogo → Productos → *(detalle de un producto)*

## ¿Qué son los Permalinks de Carrito?

Los permalinks son enlaces especiales que, al hacer clic, agregan uno o más productos directamente al carrito de compras del cliente y lo llevan al checkout. Son ideales para compartir por WhatsApp, redes sociales, email o cualquier canal de comunicación.

Cuando un comprador abre el enlace:

1. Se muestra brevemente un mensaje **"Preparando tu compra..."**
2. Los productos se agregan automáticamente al carrito
3. El comprador es redirigido al checkout, listo para completar su pedido

## Copiar el permalink de un producto

Cada producto tiene su permalink en la vista de detalle del producto en el Panel Administrador.

1. Ve a **Catálogo → Productos** y haz clic en el producto deseado
2. En el panel lateral derecho, busca la sección **"Permalink de carrito"**
3. Verás un campo con el enlace generado automáticamente
4. Haz clic en el botón **Copiar** (icono de copiar) junto al campo

El enlace se copiará al portapapeles y podrás pegarlo donde necesites.

## Formato del enlace

El permalink tiene el siguiente formato:

```
https://tutienda.mitienda.pe/compra?items=PRODUCTO_ID:VARIANTE_ID:CANTIDAD
```

| Parámetro | Descripción | Obligatorio |
|---|---|---|
| `PRODUCTO_ID` | El ID numérico del producto | Sí |
| `VARIANTE_ID` | El ID de la variante. Usa `0` si el producto no tiene variantes | Sí |
| `CANTIDAD` | Cantidad de unidades a agregar al carrito (mínimo 1) | Sí |

### Ejemplo — Un solo producto

```
https://tutienda.mitienda.pe/compra?items=415346:0:1
```

Agrega **1 unidad** del producto `415346` (sin variante) al carrito.

### Ejemplo — Múltiples productos

Puedes agregar varios productos en un solo enlace separándolos con coma:

```
https://tutienda.mitienda.pe/compra?items=415346:0:1,415347:0:2,415348:5:3
```

Esto agrega al carrito:
- 1 unidad del producto `415346` (sin variante)
- 2 unidades del producto `415347` (sin variante)
- 3 unidades del producto `415348` (variante `5`)

### Ejemplo — Producto con variante

Si tu producto tiene variantes (talla, color, etc.), usa el ID de la variante en la segunda posición:

```
https://tutienda.mitienda.pe/compra?items=415346:128:1
```

Agrega 1 unidad del producto `415346`, variante `128`.

## Casos de uso comunes

| Caso | Cómo hacerlo |
|---|---|
| **Venta por WhatsApp** | Copia el permalink y envíalo por chat. El cliente hace clic y llega directo al checkout |
| **Link en redes sociales** | Usa el permalink como enlace de tu publicación o historia. Se genera una vista previa con el nombre, precio e imagen del producto |
| **Email marketing** | Incluye el permalink como botón o enlace en tu campaña. Ideal para productos específicos o kits |
| **Kits o packs** | Arma un enlace con varios productos separados por coma para vender combos rápidamente |
| **QR en tienda física** | Genera un código QR con el permalink para que los clientes compren desde su celular |

## Vista previa en redes sociales

Cuando compartes un permalink en WhatsApp, Facebook o Twitter, se genera automáticamente una vista previa con:

- **Título**: nombre del producto (o "X productos" si son varios)
- **Descripción**: nombre y precio del producto
- **Imagen**: foto principal del producto

Esto hace que el enlace se vea profesional y aumente la confianza del comprador.

## Comportamiento del enlace

| Aspecto | Detalle |
|---|---|
| **Carrito previo** | Al abrir el permalink, el carrito anterior del comprador se **reemplaza** con los productos del enlace |
| **Producto agotado** | Si el producto no tiene stock o no existe, el comprador es redirigido a la página de inicio |
| **Cantidad máxima** | Se respeta el stock disponible. Si pides más del stock existente, se limita al máximo disponible |
| **Límite de productos** | Puedes incluir hasta **20 productos** en un solo permalink |

## Cómo armar un permalink manualmente

Si necesitas crear un enlace con múltiples productos o cantidades específicas, sigue estos pasos:

1. Obtén el **ID** de cada producto (visible en la URL del detalle o en la lista de productos)
2. Define la **variante** (`0` si no tiene variantes) y la **cantidad**
3. Arma cada producto como `ID:VARIANTE:CANTIDAD`
4. Únelos con comas
5. Agrega todo al final de la URL: `https://tutienda.mitienda.pe/compra?items=...`

**Ejemplo**: quieres que el cliente compre 2 camisetas (ID 100) y 1 gorra (ID 205):

```
https://tutienda.mitienda.pe/compra?items=100:0:2,205:0:1
```

## Preguntas frecuentes

**¿El permalink funciona con dominio propio?**
Sí. Si tu tienda tiene un dominio propio configurado (ej: `www.miempresa.com`), el permalink usará ese dominio automáticamente.

**¿Puedo cambiar la cantidad desde el checkout?**
Sí. El comprador puede modificar cantidades o eliminar productos una vez que llega al checkout.

**¿El enlace tiene fecha de vencimiento?**
No. El permalink funciona mientras el producto esté activo y disponible en tu tienda.

**¿Se acumulan los productos con el carrito existente?**
No. Al abrir un permalink, el carrito anterior se limpia y se reemplaza con los productos del enlace.

**¿Puedo usar permalinks para productos con variantes?**
Sí. Necesitas el ID de la variante específica. Puedes encontrarlo en el detalle del producto en el panel administrador.

**¿Cómo encuentro el ID de un producto?**
El ID aparece en la URL cuando abres el detalle del producto. Por ejemplo, si la URL es `/products/415346`, el ID es `415346`.
