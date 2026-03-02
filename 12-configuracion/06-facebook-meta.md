# Facebook / Meta

**Ruta:** Panel Administrador → Integraciones → Proveedores → Facebook CAPI

::: info Acceso desde Integraciones
Esta configuración se accede desde el módulo de **Integraciones → Proveedores**. Haz clic en la tarjeta de Facebook para llegar aquí.
:::

## ¿Para qué sirve esta configuración?

Conecta tu tienda con las herramientas de marketing de Meta para rastrear conversiones, optimizar anuncios y sincronizar tu catálogo de productos con Facebook e Instagram.

## Campos disponibles

| Campo | Descripción |
|---|---|
| Facebook Pixel ID | ID del píxel para rastrear visitas y conversiones |
| Conversions API (CAPI) access token | Token para enviar eventos del servidor directamente a Meta |
| Test event code | Código para probar que los eventos llegan correctamente |
| Catálogo de Facebook | Activa el feed de productos para usar en anuncios de catálogo |

## Eventos que se registran

Con el Pixel y CAPI activos, MiTienda envía automáticamente a Meta los siguientes eventos: creación de pedido, pago completado, registro de cliente y carrito abandonado.

## Preguntas frecuentes

**¿Qué es la Conversions API (CAPI)?**
Es una conexión directa entre MiTienda y Meta que complementa al Pixel. Mejora la precisión del seguimiento, especialmente en navegadores que bloquean cookies (como Safari). Se recomienda activar ambos.

**¿Dónde obtengo el Pixel ID y el token CAPI?**
En el Administrador de Eventos de Meta Business Suite → tu Pixel → Configuración.

**¿El catálogo de Facebook se actualiza automáticamente?**
Sí. Al activarlo, Meta importa tu catálogo de productos y lo mantiene sincronizado automáticamente.
