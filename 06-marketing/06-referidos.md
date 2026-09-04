---
title: Códigos de Referido
description: Rastrea ventas de vendedores, influencers o socios comerciales con códigos de referido y enlaces con seguimiento.
---

# Códigos de Referido

**Ruta:** Panel Administrador → Marketing → Referidos

## ¿Qué son los Códigos de Referido?

Los códigos de referido permiten rastrear qué ventas llegan gracias a un vendedor, influencer o socio comercial específico. Cuando un comprador llega a tu tienda con un código, ese código queda registrado en el pedido.

::: tip Importante
El comprador **no escribe el código en ningún formulario**. El código viaja en el enlace que tú le entregas al referido para que lo comparta. Si no armas el enlace correctamente, la venta no se atribuye a nadie.
:::

## Crear un código de referido

| Campo | Descripción |
|---|---|
| Nombre del referido | Nombre de la persona o canal (ej: "María García - Influencer") |
| Código | Código alfanumérico único. Puedes escribirlo tú o generarlo automáticamente |
| Estado | Activo o inactivo |

El código se genera con una longitud configurable entre 6 y 20 caracteres. Una vez creado, **el código no puede modificarse**.

Desde el listado también puedes **Exportar** todos los códigos a CSV e **Importar** códigos en lote, útil cuando das de alta a muchos referidos a la vez.

## Cómo compartir un código {#como-compartir-un-codigo}

El código se entrega dentro de la URL. Tienes tres formas, y todas terminan en el mismo lugar: el código queda guardado en el navegador del comprador y se aplica solo cuando llega al checkout.

### 1. Agregar `?ref=` a cualquier página

Es la forma más común. Toma cualquier URL de tu tienda y agrégale el parámetro `ref` con el código:

```
https://tutienda.com/?ref=MARIA10
https://tutienda.com/producto/zapatillas-running?ref=MARIA10
```

Funciona en la portada, en una ficha de producto, en una categoría o en cualquier página. Si la URL ya tiene otros parámetros, une el tuyo con `&` en vez de `?`:

```
https://tutienda.com/categoria/ofertas?orden=precio&ref=MARIA10
```

### 2. Enlace corto `/ref/`

Más limpio para compartir en redes o imprimir:

```
https://tutienda.com/ref/MARIA10
```

Guarda el código y redirige al comprador a tu tienda automáticamente.

### 3. Permalink de carrito con referido

Si además quieres que el referido comparta un carrito ya armado, agrega `&ref=` al permalink:

```
https://tutienda.com/cart_link?429406:450182:1&ref=MARIA10
```

El comprador abre el enlace con los productos ya en el carrito y la venta queda atribuida. Ver: [Permalinks de Carrito](07-permalinks.md).

## Cómo se aplica el código

1. El comprador abre cualquiera de los enlaces anteriores.
2. El código queda guardado **en el navegador** del comprador.
3. Al llegar al checkout se aplica automáticamente y se valida contra tu lista de códigos.
4. Al completar el pedido, el código queda asociado y lo ves en el detalle.

Ten en cuenta:

- **El comprador nunca ve el código.** No aparece en el carrito ni en el checkout, y no puede escribirlo ni quitarlo.
- **El código no vence.** Queda guardado hasta que el comprador borre los datos de su navegador o abra el enlace de otro referido, en cuyo caso el nuevo código reemplaza al anterior.
- **Es por navegador y dispositivo.** Si el comprador abre el enlace en el celular pero compra desde la laptop, la venta no se atribuye.
- **Mayúsculas y minúsculas dan igual:** `MARIA10` y `maria10` son el mismo código.
- **Si el código está inactivo, el enlace sigue abriendo la tienda pero no atribuye la venta**, sin ningún aviso al comprador. Si desactivas un código, los enlaces ya compartidos dejan de rastrear en silencio.

## Ver qué pedidos usaron un código

Puedes ver el código de referido asociado en el detalle de cada pedido.

## Preguntas frecuentes

**¿Los códigos de referido dan descuento al comprador?**
No por defecto. Son solo de rastreo. Si quieres dar un descuento al usarlos, crea una Promoción v2 con activación por referido. Ver: [Promociones Avanzadas](02-promociones-avanzadas.md).

**¿Puedo desactivar un código sin eliminarlo?**
Sí. El switch de estado permite activar o desactivar el código en cualquier momento. Recuerda que los enlaces ya compartidos dejarán de atribuir ventas.

**¿Qué pasa si un comprador abre enlaces de dos referidos distintos?**
Se queda el último. El código más reciente reemplaza al anterior.

**¿Puedo ver cuántas ventas generó cada referido?**
Desde Reportes o filtrando los pedidos por el código de referido puedes calcular el volumen generado.
