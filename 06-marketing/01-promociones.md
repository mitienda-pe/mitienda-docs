# Promociones

**Ruta:** Panel Administrador → Marketing → Promociones

## ¿Qué son las Promociones?

Las promociones te permiten ofrecer descuentos, bonificaciones y beneficios especiales a tus compradores. MiTienda tiene dos motores de promociones: **Promociones** (versión estándar) y **Promociones Avanzadas** (motor con reglas complejas).

---

## Promociones (versión estándar)

**Ruta:** Marketing → Promociones

Ideal para descuentos simples y bonificaciones directas.

### Crear una promoción

| Campo | Descripción |
|---|---|
| Nombre | Nombre interno de la promoción |
| Tipo | Porcentaje, monto fijo, precio especial o bonificación |
| Valor | El porcentaje o monto del descuento |
| Fecha inicio / fin | Periodo de vigencia (opcional) |
| Productos vinculados | A qué productos aplica |
| Estado | Activa o inactiva |

### Tipos de descuento

| Tipo | Ejemplo |
|---|---|
| **Porcentaje** | 20% de descuento en el producto |
| **Monto fijo** | S/ 10 de descuento en el producto |
| **Precio especial** | El producto tiene un precio fijo promocional |
| **Bonificación** | Lleva 3, paga 2 (lleva X, recibe Y gratis) |

### Bonificaciones (Lleva X paga Y)

Para configurar una bonificación:
- Define el **producto trigger** (el que el comprador agrega al carrito)
- Define el **producto de regalo** (el que recibe gratis o con descuento)
- Define las cantidades (ej: compra 2 y recibe 1 gratis)

---

## Promociones Avanzadas

**Ruta:** Marketing → Promociones Avanzadas

Motor de reglas flexible para crear promociones con condiciones complejas. Ideal para campañas de temporada, descuentos por volumen, envío gratis, y más.

### Estructura de una promoción avanzada

Cada promoción se define con 4 componentes:

#### 1. Activación — ¿Cómo se activa la promoción?

| Tipo | Descripción |
|---|---|
| **Automática** | Se aplica sin que el comprador haga nada |
| **Cupón** | El comprador ingresa un código de descuento |
| **Referido** | Se activa al usar un enlace de referido |
| **Permalink** | Se activa al ingresar por una URL específica |
| **Evento** | Se activa en una fecha u hora específica |

#### 2. Condiciones — ¿Cuándo aplica?

| Condición | Ejemplo de uso |
|---|---|
| Producto en el carrito | Solo si el cliente tiene el producto X |
| Categoría en el carrito | Solo si tiene productos de la categoría Y |
| Monto mínimo del carrito | Solo compras mayores a S/ 100 |
| Cantidad mínima de items | Solo si compra 3 o más productos |
| Segmento de cliente | Solo para clientes VIP |
| Método de pago | Solo pagando con Yape |
| Ubicación | Solo para una región específica |
| Primera compra | Solo para nuevos compradores |

#### 3. Efectos — ¿Qué beneficio recibe el comprador?

| Efecto | Descripción |
|---|---|
| % de descuento en producto | Ej: 15% off en el producto X |
| % de descuento en carrito | Ej: 10% off en toda la compra |
| Monto fijo de descuento | Ej: S/ 20 de descuento en el carrito |
| Envío gratis | Sin costo de delivery |
| Lleva X, paga Y | Bonificación de unidades |
| Precio fijo especial | El producto tiene un precio promocional |

#### 4. Restricciones — ¿Cuáles son los límites?

| Restricción | Descripción |
|---|---|
| Máximo de usos totales | La promo se desactiva después de N usos |
| Máximo por cliente | Cada cliente puede usarla máximo N veces |
| No acumulable | No puede combinarse con otras promociones |
| Ventana horaria | Solo en ciertos días u horas |
| Stock limitado | La promo aplica solo mientras haya unidades |

### Cupones dentro de una promoción avanzada

Si la activación es por cupón, puedes:
- Crear múltiples códigos para la misma promoción
- Definir un código personalizado o dejar que el sistema lo genere
- Establecer usos máximos por código

## Preguntas frecuentes

**¿Puedo tener varias promociones activas al mismo tiempo?**
Sí. El sistema aplica la más beneficiosa para el comprador, o si configuraste que no sean acumulables, aplica solo la primera que coincida.

**¿Cómo sé si una promoción está funcionando?**
Desde **Reportes → Rendimiento de Promociones** puedes ver los usos y el descuento otorgado por cada campaña.

**¿Los descuentos se aplican automáticamente o el comprador debe hacer algo?**
Depende del tipo de activación. Las promociones automáticas se aplican sin que el comprador haga nada. Las de cupón requieren que el comprador ingrese el código en el checkout.

**¿Puedo crear una promo de envío gratis para compras mayores a S/ 150?**
Sí. En Promociones Avanzadas: Activación = Automática, Condición = Monto mínimo del carrito (S/ 150), Efecto = Envío gratis.
