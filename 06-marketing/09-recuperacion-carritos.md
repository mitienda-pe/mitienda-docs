---
title: Recuperación de Carritos
description: Envía recordatorios automáticos por email a quienes dejaron productos en el carrito sin comprar.
---

# Recuperación de Carritos

**Ruta:** Panel Administrador → Marketing → Recuperación de carritos

## ¿Qué es la Recuperación de Carritos?

Cuando un cliente agrega productos al carrito y se va sin comprar, este módulo le envía recordatorios automáticos por email con un enlace para **retomar la compra donde la dejó**: al abrir el enlace, sus productos siguen en el carrito.

Es distinto del módulo de [Carritos Abandonados](../03-ventas/04-carritos-abandonados.md), que te muestra el listado para que tú hagas el seguimiento a mano. Aquí el envío es automático.

## Activar los recordatorios

Un solo interruptor enciende el módulo. Ten en cuenta:

- **Al desactivarlo, los recordatorios pendientes se detienen de inmediato.** No se envía lo que quedaba en cola.
- Todos los correos incluyen un **enlace de baja** para el cliente.

## La secuencia de recordatorios

Puedes enviar hasta **3 recordatorios** por carrito. Cada uno sale pasadas las horas que indiques **desde el abandono** (no desde el recordatorio anterior).

| Recordatorio | Horas por defecto |
|---|---|
| Primer recordatorio | 1 hora |
| Segundo recordatorio | 24 horas |
| Último recordatorio | 72 horas |

El primero no se puede desactivar: es el mínimo del módulo. El segundo y el tercero los activas con su interruptor, y cada uno admite entre **1 y 336 horas** (14 días).

::: tip La secuencia se cancela sola
Si el cliente completa la compra o se da de baja, los recordatorios que faltaban no se envían. No hay riesgo de seguir insistiéndole a alguien que ya compró.
:::

## Aviso de correos duplicados

Si ya envías el evento de carrito abandonado a una plataforma de email marketing (Doppler, Klaviyo u otra), el módulo te muestra una advertencia.

El motivo: si además tienes armado un flujo de recuperación en esa plataforma, tu cliente recibirá **dos correos por el mismo carrito**, uno de cada sistema. Elige uno de los dos:

- Usa este módulo y desactiva el evento de carrito abandonado en [Integraciones](../13-integraciones/01-overview.md), **o**
- Deja el flujo en tu plataforma de email marketing y no actives este módulo.

## Preguntas frecuentes

**¿A quién se le envían los recordatorios?**
A clientes de los que tengamos el correo, es decir, quienes iniciaron el checkout o están registrados. Un visitante anónimo que solo agregó productos al carrito no recibe nada.

**¿Puedo personalizar el texto del correo?**
Por ahora no. El correo usa la plantilla de la plataforma con los productos del carrito y el enlace de retorno.

**¿Puedo incluir un cupón de descuento en el último recordatorio?**
Todavía no. Es una función anunciada como próxima dentro del módulo.

**¿Qué pasa si el cliente abandona el carrito varias veces?**
La secuencia trabaja sobre el carrito abandonado. Si vuelve, compra o abandona de nuevo, el seguimiento se ajusta a esa nueva situación.

**¿Cuenta como spam?**
No: son correos transaccionales derivados de una acción del propio cliente en tu tienda, y todos llevan enlace de baja.
