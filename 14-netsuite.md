---
title: NetSuite
description: Integra MiTienda con NetSuite para sincronizar pedidos, stock, precios y promociones automáticamente.
---

# NetSuite

**Ruta:** Panel Administrador → NetSuite

## ¿Qué es la integración con NetSuite?

NetSuite es un ERP empresarial. La integración con MiTienda permite sincronizar pedidos, stock, precios y promociones entre ambas plataformas de forma automática o manual.

> Esta integración está diseñada para empresas que ya usan NetSuite como sistema central de gestión.

## Configuración (4 pestañas)

### Pestaña 1: Credenciales

Ingresa las credenciales OAuth 1.0 que te proporciona tu administrador de NetSuite:

| Campo | Descripción |
|---|---|
| Account ID | ID de tu cuenta NetSuite |
| Consumer Key | Clave de consumidor OAuth |
| Consumer Secret | Secret del consumidor OAuth |
| Token ID | Token de acceso |
| Token Secret | Secret del token |
| Subsidiary ID | ID de la subsidiaria en NetSuite |
| Ubicación Serie ID | ID de ubicación para series |
| Generic Customer ID | ID de cliente genérico en NetSuite |
| Bonification Item ID | ID del ítem de bonificación |
| Price Level ID | ID del nivel de precio |
| Customer Category ID | ID de categoría de cliente |

Haz clic en **Test de conexión** para verificar que las credenciales son correctas.

### Pestaña 2: Series

Configura el mapeo de series de documentos:

- **Series de documentos:** mapeo entre las series de boletas/facturas de MiTienda y las series de NetSuite
- **Cuentas de caja:** mapeo de las cuentas contables de NetSuite con los métodos de pago de MiTienda
- **Sucursales (Branches):** configuración de sucursales asociadas

### Pestaña 3: Precios

Configura la sincronización de precios desde NetSuite:

- Importación de precios desde el ERP
- Mapeo de niveles de precios entre ambas plataformas

### Pestaña 4: Pruebas

Permite realizar pruebas de conexión y sincronización para verificar que la integración funciona correctamente antes de activarla en producción.

## Sincronizaciones disponibles

| Sincronización | Descripción |
|---|---|
| **Stock** | Bidireccional. NetSuite actualiza el stock en MiTienda automáticamente |
| **Precios** | NetSuite → MiTienda. Importa precios desde el ERP |
| **Pedidos** | MiTienda → NetSuite. Cada pedido pagado se envía al ERP |
| **Promociones** | NetSuite → MiTienda. Importa descuentos configurados en el ERP |

## Stock

**Ruta:** Panel Administrador → NetSuite → Stock

El módulo de Stock es una página separada que permite consultar el estado del inventario sincronizado entre MiTienda y NetSuite.

| Columna | Descripción |
|---|---|
| SKU | Código del producto |
| Producto | Nombre del producto |
| NS Item ID | Internal ID en NetSuite |
| Stock Local | Cantidad en MiTienda |
| Stock NetSuite | Cantidad en NetSuite |
| Estado | Estado de la sincronización |

## Monitor de sincronización

Desde esta sección puedes ver los jobs de sincronización pendientes y los que fallaron, con detalle del error para diagnosticar problemas.

## Preguntas frecuentes

**¿La sincronización de pedidos es automática?**
Sí. Cuando un pedido pasa a estado "Pagado", se encola automáticamente para enviarse a NetSuite. También puedes enviarlo manualmente desde el detalle del pedido.

**¿Qué pasa si un pedido falla al sincronizarse?**
Queda en estado de error en el monitor. Puedes reintentar manualmente o contactar a soporte si el error persiste.

**¿Necesito un técnico de NetSuite para configurar esta integración?**
Se recomienda involucrar al administrador de NetSuite de tu empresa para obtener las credenciales correctas y configurar los RESTlets necesarios.
