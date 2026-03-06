---
title: Google
description: Configura Google Analytics, Tag Manager, Search Console y Merchant Center para tu tienda.
---

# Google

**Ruta:** Panel Administrador → Integraciones → Proveedores → Google

## ¿Qué puedes configurar?

Desde aquí gestionas todas las herramientas de Google para tu tienda: seguimiento de tráfico, gestión de tags, verificación en Search Console y feed de productos para Google Shopping.

## Google Analytics y Tag Manager

| Campo | Descripción |
| --- | --- |
| ID de Google Analytics | Tu ID de medición de GA4 (formato `G-XXXXXXXXXX`). También acepta el formato Universal Analytics (`UA-XXXXXXXX-X`). Puedes agregar varios IDs |
| ID de Google Tag Manager | Tu ID de contenedor GTM (formato `GTM-XXXXXXX`). Puedes agregar varios IDs |

### ¿Dónde encuentro mi ID de Google Analytics?

1. Ingresa a [analytics.google.com](https://analytics.google.com)
2. Ve a **Administrador → Flujos de datos → Tu flujo web**
3. Copia el ID de medición (empieza con `G-`)

### ¿Dónde encuentro mi ID de Google Tag Manager?

1. Ingresa a [tagmanager.google.com](https://tagmanager.google.com)
2. Selecciona tu contenedor
3. Copia el ID del contenedor (empieza con `GTM-`)

::: tip ¿GA4 directo o a través de GTM?
Si usas GTM, puedes instalar GA4 dentro de GTM y no necesitas configurar el ID de GA4 aquí por separado. GTM te permite gestionar todos tus tags de seguimiento desde un solo lugar.
:::

## Google Search Console

| Campo | Descripción |
| --- | --- |
| Etiqueta de verificación | El valor del atributo `content` de la meta etiqueta de verificación de Google Search Console |
| Sitemap | URL de tu sitemap.xml, generado automáticamente por MiTienda |

### Cómo verificar tu tienda en Search Console

1. Ingresa a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu propiedad (la URL de tu tienda)
3. Selecciona el método **Etiqueta HTML**
4. Copia solo el valor del atributo `content` y pégalo en el campo de verificación
5. Haz clic en "Guardar" y luego verifica en Search Console

### Enviar tu sitemap

La URL de tu sitemap aparece en esta sección. Cópiala y agrégala en Search Console → Sitemaps para mejorar la indexación de tu tienda.

## Feed de productos (Google Merchant Center)

La URL del feed de productos te permite sincronizar tu catálogo con Google Merchant Center para mostrar tus productos en Google Shopping.

### Cómo conectar con Merchant Center

1. Crea una cuenta en [merchants.google.com](https://merchants.google.com)
2. Agrega un feed de productos → Tipo: **URL programada**
3. Pega la URL del feed que aparece en esta sección
4. Google importará tu catálogo automáticamente

## Preguntas frecuentes

**¿Puedo usar GA4 y GTM al mismo tiempo?**
Sí, pero si ya configuras GA4 dentro de GTM, no necesitas poner el ID de GA4 aquí por separado.

**¿El feed de productos se actualiza automáticamente?**
Sí. Cuando agregas o modificas productos, el feed se actualiza. Google Merchant Center lo importa según la frecuencia que configures (recomendado: diario).

**¿Puedo agregar varios IDs de GA4 o GTM?**
Sí. Puedes agregar múltiples IDs separados por coma. Esto es útil si necesitas enviar datos a más de una propiedad o contenedor.
