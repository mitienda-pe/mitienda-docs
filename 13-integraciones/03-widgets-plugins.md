---
title: Widgets y Plugins
description: Activa herramientas de chat en vivo, analytics, notificaciones push y captura de leads en tu tienda.
---

# Widgets y Plugins

**Ruta:** Panel Administrador → Integraciones → Proveedores

## ¿Qué son los widgets y plugins?

Son herramientas de terceros que se cargan automáticamente en tu tienda online cuando están activadas. Incluyen chat en vivo, analytics de comportamiento, notificaciones push y captura de leads.

Solo necesitas ingresar las credenciales del proveedor (generalmente un ID o API key que obtienes en tu cuenta de ese servicio) y MiTienda se encarga de cargar el script en tu tienda.

## Cómo configurar un widget

1. Ve a **Integraciones → Proveedores**
2. Busca el widget en la categoría correspondiente
3. Haz clic en la tarjeta del proveedor
4. Ingresa las credenciales requeridas
5. Guarda y activa la integración

El widget se cargará automáticamente en tu tienda online para todos los visitantes.

## Consentimiento de cookies

Algunos widgets requieren el consentimiento del visitante antes de cargarse:

| Categoría | Consentimiento | Descripción |
| --- | --- | --- |
| Chat en vivo | No requiere | Se considera funcional, se carga siempre |
| Analytics | Requiere aceptar "Analytics" | Herramientas de seguimiento de comportamiento |
| Push / Lead capture | Requiere aceptar "Marketing" | Notificaciones y popups promocionales |

---

## Chat en vivo

Agrega un widget de chat para atender a tus clientes en tiempo real.

| Proveedor | Credenciales requeridas | Sitio web |
| --- | --- | --- |
| **Tawk.to** | Property ID, Widget ID | [tawk.to](https://www.tawk.to) |
| **LiveChat** | License number | [livechat.com](https://www.livechat.com) |
| **Chatway** | Widget ID | [chatway.app](https://chatway.app) |
| **Chatify** | Widget ID | [chatify.com](https://chatify.com) |

### Dónde encontrar las credenciales

- **Tawk.to:** En tu panel de Tawk.to → Administración → Canales → Chat Widget. El Property ID y Widget ID están en la URL del snippet.
- **LiveChat:** En tu panel de LiveChat → Configuración → Instalación. El número de licencia aparece en el snippet.
- **Chatway:** En tu panel de Chatway → Widget Settings → Installation. Copia el Widget ID.

---

## Analytics y comportamiento

Herramientas para entender cómo los visitantes interactúan con tu tienda (mapas de calor, grabaciones de sesión, etc.).

| Proveedor | Credenciales requeridas | Sitio web |
| --- | --- | --- |
| **Hotjar** | Site ID | [hotjar.com](https://www.hotjar.com) |
| **Microsoft Clarity** | Project ID | [clarity.microsoft.com](https://clarity.microsoft.com) |
| **Crazy Egg** | Account number | [crazyegg.com](https://www.crazyegg.com) |

### Dónde encontrar las credenciales

- **Hotjar:** En tu panel de Hotjar → Settings → Sites & Organizations → tu sitio. El Site ID aparece en el snippet de instalación.
- **Clarity:** En tu panel de Clarity → Settings → Setup. Copia el Project ID.
- **Crazy Egg:** En tu panel de Crazy Egg → Account Settings. Tu account number aparece en la URL del script.

---

## Notificaciones push

Envía notificaciones push a los navegadores de tus visitantes.

| Proveedor | Credenciales requeridas | Sitio web |
| --- | --- | --- |
| **OneSignal** | App ID | [onesignal.com](https://onesignal.com) |

### Dónde encontrar las credenciales

- **OneSignal:** En tu panel de OneSignal → Settings → Keys & IDs. Copia el OneSignal App ID.

---

## Captura de leads y popups

Herramientas para mostrar popups, barras de anuncio y formularios de captura de leads.

| Proveedor | Credenciales requeridas | Sitio web |
| --- | --- | --- |
| **OptinMonster** | Account ID, User ID | [optinmonster.com](https://optinmonster.com) |
| **Privy** | Account ID | [privy.com](https://www.privy.com) |
| **Bdow** | Site ID | [bdow.com](https://bdow.com) |
| **HelloBar** | Site ID | [hellobar.com](https://www.hellobar.com) |
| **Poptin** | User ID | [poptin.com](https://www.poptin.com) |

### Dónde encontrar las credenciales

- **OptinMonster:** En tu panel de OptinMonster → Account Settings. El Account ID y User ID están en la sección de API.
- **Privy:** En tu panel de Privy → Account Settings → Installation. Copia el Account ID del snippet.
- **Bdow / HelloBar:** En tu panel respectivo → Settings → Installation. El Site ID aparece en la URL del script.

---

## Preguntas frecuentes

**¿Puedo tener varios widgets activos al mismo tiempo?**
Sí. Puedes tener, por ejemplo, Tawk.to para chat y Hotjar para analytics activos simultáneamente.

**¿Los widgets afectan la velocidad de mi tienda?**
Los scripts se cargan de forma asíncrona, por lo que el impacto en la velocidad de carga es mínimo. Sin embargo, tener muchos widgets activos puede afectar ligeramente el rendimiento.

**¿Cómo desactivo un widget?**
Ve a **Integraciones → Proveedores**, haz clic en el proveedor y desactívalo. El script dejará de cargarse inmediatamente.

**¿Los widgets funcionan en dispositivos móviles?**
Sí. Todos los widgets listados son responsivos y funcionan tanto en desktop como en móvil.
