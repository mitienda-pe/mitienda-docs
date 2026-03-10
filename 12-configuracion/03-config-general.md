---
title: Configuración General
description: Ajusta moneda, monto mínimo de pedido y otras opciones generales de tu tienda en MiTienda.pe.
---

# Configuración General

**Ruta:** Panel Administrador → Tu Tienda → Configuración

## Opciones disponibles

| Campo | Descripción |
|---|---|
| Moneda | Moneda de tu tienda (PEN, USD, MXN, etc.) |
| Monto mínimo de pedido | Valor mínimo para aceptar un pedido |
| Monto máximo de pedido | Valor máximo permitido por pedido |
| Horario de actividad | Define en qué horas acepta pedidos tu tienda |
| Login obligatorio | Si los compradores deben registrarse para comprar |
| Verificación de edad | Solicita confirmación de mayoría de edad antes de acceder a la tienda |
| Modo de precios | Si los precios se muestran con IGV o sin IGV |
| Texto de IGV | Personaliza cómo se llama el impuesto (ej: "Incluye IGV", "Precio + IGV") |

## Horario de actividad

Puedes definir un horario en el que tu tienda acepta pedidos. Fuera de ese horario, el storefront puede mostrar un mensaje de "Fuera de horario" y no permitir completar compras. Activa o desactiva esta función con el switch de horario.

## Verificación de edad

Si tu tienda vende productos restringidos para menores de edad (tabaco, alcohol, vapes, etc.), puedes activar la verificación de edad. Al activarla, los visitantes verán un modal antes de acceder a tu tienda donde deben confirmar que son mayores de edad.

### Opciones

| Campo | Descripción |
|---|---|
| Activar/Desactivar | Switch para habilitar la verificación de edad |
| Edad mínima | Edad requerida para acceder (por defecto 18 años, configurable de 1 a 99) |
| Mensaje personalizado | Texto que se muestra al visitante. Si se deja vacío, se usa el mensaje predeterminado: "Debes ser mayor de X años para acceder a esta tienda." |

### Comportamiento

- El modal se muestra **una sola vez por navegador**. Una vez que el visitante confirma su edad, no se le vuelve a preguntar (se guarda en el almacenamiento local del navegador).
- Si el visitante indica que **no es mayor de edad**, se le redirige fuera del sitio.
- La verificación es por tienda: si un usuario visita otra tienda con verificación de edad, deberá confirmar nuevamente.

## Preguntas frecuentes

**¿Puedo cambiar la moneda en cualquier momento?**
Sí, pero ten en cuenta que los precios de tus productos se mantendrán igual numéricamente. Si cambias de PEN a USD, deberás revisar y ajustar todos los precios.

**¿El login obligatorio aplica también en el checkout?**
Sí. Si está activo, los compradores deben crear una cuenta o iniciar sesión antes de completar su compra.

**¿La verificación de edad realmente impide que menores compren?**
La verificación de edad es una barrera informativa (age gate) similar a la usada por sitios de bebidas alcohólicas y tabaco. No valida la identidad del visitante, pero cumple con la práctica estándar de la industria de solicitar confirmación antes de mostrar productos restringidos.
