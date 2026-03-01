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
| RESTlet URL (Stock) | URL del script de NetSuite para stock |
| RESTlet URL (Pedidos) | URL del script para órdenes |
| RESTlet URL (Precios) | URL del script para precios |
| RESTlet URL (Promociones) | URL del script para promociones |

Haz clic en **Test de conexión** para verificar que las credenciales son correctas.

### Pestaña 2: Mapeo de Inventario

Define la equivalencia entre los SKUs de MiTienda y los Internal IDs de NetSuite. Sin este mapeo, el sistema no puede sincronizar el stock correctamente.

- El mapeo puede ser manual (escribes cada equivalencia) o automático (si los SKUs coinciden)
- También configuras las **ubicaciones de inventario** (warehouses) de NetSuite

### Pestaña 3: Stock

Configura la sincronización bidireccional de inventario:
- Frecuencia de sincronización (cada X minutos)
- Dirección: NetSuite → MiTienda, MiTienda → NetSuite, o ambas
- Registro de la última sincronización exitosa

### Pestaña 4: Configuración adicional

- **Series de documentos:** mapeo entre las series de boletas/facturas de MiTienda y las series de NetSuite
- **Cuentas de caja:** mapeo de las cuentas contables de NetSuite con los métodos de pago de MiTienda

## Sincronizaciones disponibles

| Sincronización | Descripción |
|---|---|
| **Stock** | Bidireccional. NetSuite actualiza el stock en MiTienda automáticamente |
| **Precios** | NetSuite → MiTienda. Importa precios desde el ERP |
| **Pedidos** | MiTienda → NetSuite. Cada pedido pagado se envía al ERP |
| **Promociones** | NetSuite → MiTienda. Importa descuentos configurados en el ERP |

## Monitor de sincronización

Desde esta sección puedes ver los jobs de sincronización pendientes y los que fallaron, con detalle del error para diagnosticar problemas.

## Preguntas frecuentes

**¿La sincronización de pedidos es automática?**
Sí. Cuando un pedido pasa a estado "Pagado", se encola automáticamente para enviarse a NetSuite. También puedes enviarlo manualmente desde el detalle del pedido.

**¿Qué pasa si un pedido falla al sincronizarse?**
Queda en estado de error en el monitor. Puedes reintentar manualmente o contactar a soporte si el error persiste.

**¿Necesito un técnico de NetSuite para configurar esta integración?**
Se recomienda involucrar al administrador de NetSuite de tu empresa para obtener las credenciales correctas y configurar los RESTlets necesarios.
