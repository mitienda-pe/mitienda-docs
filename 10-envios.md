---
title: Reparto y Envíos
description: Configura envío a domicilio, recojo en tienda, tarifas por zona y couriers para tu tienda online.
---

# Reparto

**Ruta:** Panel Administrador → Reparto

## ¿Qué puedes configurar aquí?

Todo lo relacionado al despacho de pedidos: si ofreces envío a domicilio, recojo en tienda, cuánto cobras por zona y qué couriers usas.

## Configuración General

| Campo | Descripción |
|---|---|
| Envío a domicilio | Activar o desactivar el despacho a domicilio |
| Recojo en tienda | Activar o desactivar la opción de pickup |

## Zonas de Reparto

Las zonas definen a qué distritos puedes enviar y cuánto cobras en cada uno.

**Ruta:** Reparto → Zonas de Reparto

**Cómo crear una zona:**

1. Ponle un nombre (ej: "Lima Metropolitana")
2. Selecciona los distritos que cubre (basado en ubigeo peruano)
3. Define la tarifa fija para esa zona

Puedes crear múltiples zonas con tarifas diferentes. Por ejemplo: Lima Centro S/ 8, Lima Periférica S/ 12, Provincia S/ 20.

## Tarifas de Envío

**Ruta:** Reparto → Tarifas de Envío

Configura los costos de envío por nivel geográfico para cada país habilitado (Perú, Ecuador, Colombia).

Para cada tarifa puedes definir:

- **Nivel geográfico:** departamento, provincia o distrito
- **Precio:** costo del envío para esa zona
- **Tiempo de entrega:** estimado en días hábiles

## Proveedores

**Ruta:** Reparto → Proveedores

Integra tu tienda con couriers para calcular tarifas y crear órdenes de envío automáticamente.

::: info Desde el plan Medium
**Proveedores** (y las reglas de courier) están disponibles en los planes **Medium** y **Large**. Las zonas, tarifas y el recojo en tienda están en todos los planes.
:::

### Couriers disponibles

| Courier | Cobertura y servicio |
|---|---|
| **Olva Courier** | Todo el Perú. Recojos y logística inversa |
| **Urbano** | Todo el Perú (calcula por ubigeo y dimensiones) |
| **Chazki** | Lima y ciudades principales del Perú (Regular, Express y Programado) |
| **Urbaner** | Lima |
| **Cabify Logistics** | Lima Metropolitana (express y same day) |
| **Home Delivery** | Operador de Grupo Falabella, envíos a provincias |
| **Nirex** | Lima Metropolitana y Callao (última milla programada) |
| **Yango Delivery** | Entregas express dentro de la ciudad |
| **99 Minutos** | Envíos locales en el día |
| **HOP Envíos** | Red de puntos de entrega y retiro (Perú, Argentina y Uruguay) |

Por ahora no hay couriers integrados para Ecuador ni Colombia: allí despachas con tus propias tarifas por zona o con recojo en tienda.

### Configurar un courier

1. Ve a **Reparto → Proveedores**
2. Selecciona el courier que quieres activar
3. Ingresa las credenciales que te proporciona el courier (API key, tokens, etc.)
4. Selecciona el modo (sandbox para pruebas, producción para operación real)
5. Haz el **test de conexión** para verificar que las credenciales son correctas

### Con el courier activo puedes:
- **Calcular tarifas** automáticamente según el destino del pedido
- **Crear órdenes de envío** directamente desde el detalle del pedido
- Ver el tracking del envío

## Sucursales como punto de recojo

Si ofreces recojo en tienda, configura tus direcciones en **Tu Tienda → Direcciones** y activa **Punto de recojo** en cada una. Cada dirección marcada así aparecerá como opción en el checkout. Ver: [Sucursales](12-configuracion/02-sucursales.md).

## Preguntas frecuentes

**¿Puedo tener zonas de envío y courier activos al mismo tiempo?**
Sí. Las zonas de envío con tarifas fijas y los couriers pueden coexistir. El sistema ofrece las opciones disponibles al comprador en el checkout.

**¿Cómo se calcula el costo de envío si uso un courier con calculo por peso?**
El sistema toma el peso total del pedido (suma de los pesos de los productos) y consulta la tarifa al API del courier. Por eso es importante completar el campo **Peso** en cada producto.

**¿Puedo ofrecer envío gratis solo para ciertos distritos?**
Puedes crear una zona de envío con tarifa S/ 0 para los distritos que quieras. O usar el umbral de envío gratis en la configuración general.

**¿Qué pasa si el comprador está en un distrito fuera de mis zonas?**
Si el distrito del comprador no está en ninguna zona de envío activa, el checkout no le mostrará la opción de envío a domicilio.
