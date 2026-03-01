# API

**Ruta:** Panel Administrador → API

## ¿Qué es el módulo de API?

Permite generar credenciales de acceso para integrar tu tienda con sistemas externos mediante la API de MiTienda.

## Generar credenciales de API

Desde este módulo puedes crear un par de claves:
- **API Key** — identificador público
- **Secret Key** — clave privada (guárdala en un lugar seguro, no la compartas)

## Webhooks (versión legacy)

Desde esta sección también puedes configurar webhooks por tipo de evento. Para webhooks más avanzados con firma HMAC y monitor de entregas, usa [Integraciones → Webhooks](13-integraciones.md).

## Documentación de la API

La documentación completa de los endpoints disponibles está accesible desde el panel. Incluye los endpoints para consultar productos, pedidos, clientes y más.

## Preguntas frecuentes

**¿Para qué necesitaría la API?**
Para conectar tu tienda con sistemas propios, crear integraciones personalizadas, o automatizar procesos que no están cubiertos por las integraciones predefinidas.

**¿La API tiene límites de uso?**
Sí. Hay límites de solicitudes por minuto según tu plan. Consulta la documentación para los detalles.

**¿Qué pasa si pierdo mi Secret Key?**
Debes generar nuevas credenciales. La Secret Key no se puede recuperar una vez que cierras la pantalla de generación.
