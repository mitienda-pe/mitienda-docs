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

### Couriers disponibles

| Courier | Cobertura |
|---|---|
| **Chazki** | Perú |
| **Urbaner** | Perú y LATAM |
| **Urbano Express** | Perú (calcula por ubigeo y dimensiones) |
| **Yango** | LATAM (delivery express con tracking en vivo) |
| **99minutos** | México y LATAM (same-day delivery) |
| **Nirex** | Lima (última milla programada) |
| **Hop** | Argentina |

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

Si ofreces recojo en tienda, asegúrate de configurar tus sucursales en **Tu Tienda → Sucursales**. Cada sucursal marcada como "punto de recojo" aparecerá como opción en el checkout. Ver: [Sucursales](12-configuracion/02-sucursales.md).

## Preguntas frecuentes

**¿Puedo tener zonas de envío y courier activos al mismo tiempo?**
Sí. Las zonas de envío con tarifas fijas y los couriers pueden coexistir. El sistema ofrece las opciones disponibles al comprador en el checkout.

**¿Cómo se calcula el costo de envío si uso un courier con calculo por peso?**
El sistema toma el peso total del pedido (suma de los pesos de los productos) y consulta la tarifa al API del courier. Por eso es importante completar el campo **Peso** en cada producto.

**¿Puedo ofrecer envío gratis solo para ciertos distritos?**
Puedes crear una zona de envío con tarifa S/ 0 para los distritos que quieras. O usar el umbral de envío gratis en la configuración general.

**¿Qué pasa si el comprador está en un distrito fuera de mis zonas?**
Si el distrito del comprador no está en ninguna zona de envío activa, el checkout no le mostrará la opción de envío a domicilio.
