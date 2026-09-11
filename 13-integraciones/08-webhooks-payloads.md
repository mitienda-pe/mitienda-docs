---
title: Webhooks — referencia de payloads
description: Estructura exacta del JSON que MiTienda envía en cada webhook, headers de autenticación y verificación de firma. Para equipos de desarrollo.
---

# Webhooks — referencia de payloads

Esta página es la referencia técnica para el equipo que va a **recibir** los
webhooks. Para configurarlos desde el panel, ver [Webhooks](/13-integraciones/05-webhooks).

MiTienda tiene dos sistemas de webhooks conviviendo. Cuál te toca depende de
dónde esté configurado el tuyo en el panel.

| | Webhooks (legacy) | Integraciones → Webhooks |
| --- | --- | --- |
| Dónde se configura | Integraciones → **Webhooks (legacy)** | Integraciones → **Webhooks** |
| Eventos | 3 fijos | 5, a elección por suscripción |
| Formato | JSON plano, claves en la raíz | Envelope `{event, data, …}` |
| Autenticación | header `token` | firma HMAC-SHA256 |
| Reintentos | no | sí, hasta 3 |
| Registro de entregas | no | sí, visible en el Monitor |

Si ya recibes webhooks y no configuraste nada nuevo, estás en el **legacy**.

## Webhooks legacy

### Eventos disponibles

Son tres, fijos, y cada uno admite una sola URL:

| Evento | Cuándo dispara |
| --- | --- |
| Confirmación de Venta/Pedido | Al **confirmarse el pago** de un pedido |
| Registro de Cliente | Al registrarse un cliente nuevo |
| Actualización de Producto | Al actualizarse un producto |

::: warning Solo pedidos pagados
"Confirmación de Venta/Pedido" dispara únicamente cuando el pedido queda
**pagado**. Un pedido creado que nunca completó el pago —el comprador abandonó la
pasarela— no genera webhook, y es correcto que no lo haga: no es una venta.

Si en el panel ves pedidos que "no llegaron" a tu sistema, revisa primero su
estado. Los que figuran como *Creado* nunca se pagaron.
:::

No existe un evento de **actualización de pedido** (cambios de estado, despacho,
anulación). Ni en legacy ni en el sistema nuevo.

### Headers

```http
POST /tu-endpoint HTTP/1.1
Content-Type: application/json
token: <token de la tienda>
```

El header `token` lleva la credencial de API de la tienda, la misma que aparece
en Integraciones → Credenciales. Úsalo para verificar que la llamada viene de
MiTienda.

### Payload de Confirmación de Venta

Ejemplo completo, con datos ficticios:

```json
{
  "object": "order",
  "id": 886829,
  "status": 1,
  "status_detail": "aprobado",
  "date_created": "2026-09-10 12:20:48",
  "receive_type": "shipping",
  "date_payment": "2026-09-10 12:21:04",
  "code": "WEB123456A0B1",
  "referral_name": "",
  "referral_code": "",
  "note": "Entregar por la tarde",
  "items": [
    {
      "id": 998231,
      "sku": "COR-4TO-COM",
      "title": "Comunicación 4to grado",
      "variation_attributes": "",
      "variation_attributes_detail": {},
      "discount": {},
      "quantity": 2,
      "unit_price": 160.0,
      "kind_of_item": 1,
      "currency_id": 1,
      "currency_iso": "PEN",
      "type_iva": 10
    }
  ],
  "discount": [],
  "discount_global": 0.0,
  "total_items": 320.0,
  "total_amount": 336.0,
  "payment_gateway_id": 18,
  "payment_gateway": "Openpay",
  "payment_method": "Visa",
  "payment_gateway_transaction_code": "tr0a1b2c3d4e5f6g7h8i",
  "billing_info": {
    "name": "ANA LUCIA",
    "last_name": "TORRES QUISPE",
    "email": "compradora@ejemplo.com",
    "phone_number": "999888777",
    "billing_address": {
      "address_line": "Av. Los Álamos 145",
      "country": { "id": 1, "name": "PERU" },
      "state": { "id": 8, "name": "CUSCO" },
      "city": { "id": 1, "name": "CUSCO" },
      "district": { "id": 9, "name": "SANTIAGO" }
    },
    "doc_id": "2",
    "doc_type": "RUC",
    "doc_number": "20512345678",
    "business_name": "SERVICIOS EDUCATIVOS EJEMPLO SAC",
    "e-billing": {}
  },
  "shipping": {
    "status": "en_camino",
    "status_id": 31,
    "name": "ANA LUCIA",
    "last_name": "TORRES QUISPE",
    "phone_number": "999888777",
    "doc_id": 1,
    "doc_type": "DNI",
    "doc_number": "45678912",
    "date_delivered": "",
    "receiver_address": {
      "address_line": "Av. Los Álamos 145",
      "address_line2": "Dpto. 302",
      "address_reference": "Frente al parque",
      "zip_code": "",
      "country": { "id": 1, "name": "PERU" },
      "state": { "id": null, "name": "CUSCO" },
      "city": { "id": null, "name": "CUSCO" },
      "district": { "id": null, "name": "SANTIAGO" },
      "latitude": "-13.5226",
      "longitude": "-71.9673",
      "comment": "",
      "erp_code": ""
    },
    "cost": 16.0,
    "courier": {},
    "tracking": []
  },
  "pickup_store": {},
  "customer": {
    "id": 55501,
    "name": "ANA LUCIA",
    "last_name": "TORRES QUISPE",
    "phone_number": "999888777",
    "doc_id": 1,
    "doc_number": "45678912",
    "business_name": "",
    "birthdate": "",
    "create_at": "2026-08-02 10:11:12",
    "update_at": "2026-09-10 12:20:48",
    "last_login": "",
    "erp_code": ""
  }
}
```

### Campos que suelen dar problemas

**`status` es numérico y `status_detail` es su nombre.** El webhook solo dispara
en pedidos pagados, así que en la práctica siempre llega `1` / `"aprobado"`.

| `status` | `status_detail` |
| --- | --- |
| 0 | rechazado |
| 1 | aprobado |
| 2 | pendiente |
| 3 | vencido |
| 5 | obsequiado |
| 6 | bloqueado |
| 9 | creado |
| 12 | expirado |

**`total_items` no incluye el envío; `total_amount` sí.** `total_amount` =
`total_items` + `shipping.cost`.

**`shipping` y `pickup_store` son excluyentes.** En un pedido con entrega a
domicilio, `shipping` trae los datos y `pickup_store` llega como `{}`. En un
recojo en tienda es al revés: `shipping` llega **`null`** y los datos van en
`pickup_store`. `receive_type` dice cuál de los dos mirar. `shipping` también
llega `null` si todos los ítems del pedido son servicios.

**`billing_address` es el domicilio del comprobante.** En una **Factura** es el
domicilio fiscal del RUC. En una **Boleta** se completa con la dirección de
entrega del pedido, que es el comportamiento histórico de la plataforma.

Puede llegar como **lista vacía `[]`** —no como objeto vacío— cuando el pedido no
tiene ninguna de las dos: una Factura cuyo domicilio fiscal no se pudo resolver,
o un pedido con recojo en tienda, que no tiene dirección de entrega que copiar.
Conviene tolerar las dos formas al deserializar.

La dirección de **entrega** está siempre en `shipping.receiver_address` (o en
`pickup_store.receiver_address` si es recojo): ese es el campo para despacho.

**`doc_id` de `billing_info` llega como texto** (`"2"`), mientras que el `doc_id`
de `shipping` y `customer` llega como número. Es una inconsistencia histórica del
contrato, no un error del pedido.

**`doc_type`** vale `"RUC"`, `"DNI"`, `"CE"` o `"PASAPORTE"`, traducido al idioma
de la tienda. Solo `"RUC"` implica factura; cualquier otro valor es boleta.

**`e-billing`, `courier`, `discount` y `variation_attributes_detail`** llegan como
`{}` cuando no aplican, no como `null`.

**`customer` llega como `{}`** si el pedido no quedó asociado a una ficha de
cliente. Los datos del comprador están igual en `billing_info`.

**`kind_of_item`**: `1` = producto, `2` = servicio.

**`code` es el identificador estable del pedido**, el mismo que ve el comerciante
en el panel. Úsalo como llave de idempotencia: si recibes dos veces el mismo
`code`, es la misma venta.

## Payload de Registro de Cliente

Este evento usa el formato con envelope, no el plano:

```json
{
  "event": "customer.created",
  "event_id": 918274,
  "store_id": 1234,
  "data": {
    "customer_id": 55501,
    "name": "ANA LUCIA TORRES QUISPE",
    "first_name": "ANA LUCIA",
    "last_name": "TORRES QUISPE",
    "email": "compradora@ejemplo.com",
    "phone": "999888777",
    "document_number": "45678912",
    "ruc": "",
    "business_name": "",
    "created_at": "2026-09-10 12:20:48"
  }
}
```

`document_number` es el documento personal; `ruc` y `business_name` son la
identidad fiscal, y llegan vacíos en una persona natural.

### Cambiar la URL

Se hace en el **Panel Administrador**, en Integraciones → **Webhooks (legacy)**.
El cambio toma efecto en el siguiente pedido; no hay que avisar a soporte.

El "(legacy)" del nombre se refiere al sistema de webhooks, no al panel: la
pantalla vive en el panel actual, en el grupo Integraciones, y aparece solo si la
tienda tiene webhooks de este tipo configurados.

::: warning El certificado de tu endpoint
El envío legacy no reintenta ni deja registro de entregas. Si tu servidor
responde con un certificado vencido, la entrega se pierde en silencio: no vas a
ver el error en ninguna parte y los pedidos simplemente dejan de llegar.

Vale la pena monitorear el vencimiento del certificado del host que recibe, sobre
todo si es un subdominio con wildcard aparte del dominio principal.
:::

## Webhooks nuevos (con firma)

Se configuran en Integraciones → **Webhooks**, con una suscripción por URL.

### Eventos

| Evento | Cuándo dispara |
| --- | --- |
| `order.created` | Se crea un pedido |
| `order.paid` | Se confirma el pago de un pedido |
| `customer.created` | Se registra un cliente |
| `product.updated` | Se actualiza un producto |
| `cart.abandoned` | Un carrito lleva más de 1 hora sin actividad |

### Envelope

```json
{
  "event": "order.paid",
  "version": "2.0",
  "event_id": 918273,
  "timestamp": "2026-09-04T17:16:02-05:00",
  "tenant_id": 1234,
  "data": { }
}
```

En los eventos `order.*`, `data` trae el pedido completo: `items`, `billing`,
`shipping` y `totals`.

**No es el mismo esquema que el legacy**, aunque cubra la misma información: las
claves de la raíz cambian (`order_code` en vez de `code`, `paid_at` en vez de
`date_payment`), el domicilio del comprobante va bajo `billing` en vez de
`billing_info`, los importes se agrupan en `totals` en lugar de `total_items` /
`total_amount`, y no existen `pickup_store` ni `status_detail`. Migrar del legacy
a este formato es un cambio de mapeo, no un cambio de URL.

### Headers y verificación de firma

```http
POST /tu-endpoint HTTP/1.1
Content-Type: application/json
User-Agent: MiTienda-Webhook/2.0
X-MiTienda-Event: order.paid
X-MiTienda-Signature: sha256=<hmac>
X-MiTienda-Delivery: <id único del intento>
X-MiTienda-Timestamp: 2026-09-04T17:16:02-05:00
```

La firma es el HMAC-SHA256 del **cuerpo crudo** de la solicitud, usando como
clave el secret de la suscripción:

```php
$esperado = 'sha256=' . hash_hmac('sha256', $cuerpoCrudo, $secret);

if (!hash_equals($esperado, $_SERVER['HTTP_X_MITIENDA_SIGNATURE'] ?? '')) {
    http_response_code(401);
    exit;
}
```

Fírmalo contra el cuerpo tal cual llegó, antes de parsear el JSON: si lo
reserializas, los espacios cambian y la firma no coincide.

### Reintentos

Si tu endpoint no responde 2xx, MiTienda reintenta hasta 3 veces con espera
creciente. Tras varios fallos seguidos la suscripción entra en pausa temporal
para no seguir golpeando un servicio caído, y se reactiva sola. Cada intento
queda registrado y es visible desde el
[Monitor de Integraciones](/13-integraciones/06-monitor).

`X-MiTienda-Delivery` es único **por intento**, no por evento. Para idempotencia
usa `event_id`, que se mantiene entre reintentos.

## Qué responder

Responde **2xx apenas recibas**, y procesa después. MiTienda espera hasta 30
segundos; si tu proceso demora más, la entrega se da por fallida aunque hayas
recibido bien los datos.

## Preguntas frecuentes

**¿Puedo usar los dos sistemas a la vez?**
Sí, son independientes. Es la forma recomendada de migrar del legacy al nuevo:
levantas la suscripción nueva, comparas contra lo que sigue llegando por el
legacy y recién ahí borras la URL vieja.

**¿Hay un evento para cambios de estado del pedido?**
No. Hoy no existe en ninguno de los dos sistemas.

**¿Cómo reenvío un pedido que no llegó?**
Si usas los webhooks nuevos, desde el detalle del pedido en el panel, en el
bloque de notificaciones. Ese botón reenvía a las suscripciones con firma
**únicamente**: si tu integración es la legacy, no la alcanza. Para reponer
pedidos del legacy hay que pedírselo a soporte, que corre la reposición por lote
indicando tienda y rango de fechas.
