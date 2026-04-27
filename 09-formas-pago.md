---
title: Formas de Pago
description: "Configura los métodos de pago de tu tienda: tarjetas, transferencias, pagos contra entrega y más."
---

# Formas de Pago

**Ruta:** Panel Administrador → Formas de Pago

## ¿Qué puedes configurar aquí?

Activa y configura los métodos de pago que aceptará tu tienda. Puedes tener múltiples métodos activos al mismo tiempo.

## Pasarelas con Tarjeta de Crédito/Débito

| Pasarela | Descripción |
|---|---|
| **Culqi** | Pasarela peruana. Acepta Visa, Mastercard, Amex, Diners |
| **Niubiz (VisaNet)** | Red de pagos de Visa en Perú |
| **MercadoPago** | Pagos con tarjeta y métodos locales |
| **Izipay** | Pasarela peruana con múltiples métodos |
| **Openpay** | Pagos con tarjeta para LATAM |
| **PowerPay** | Pasarela con tarjeta |

Para activar cada pasarela necesitas las credenciales que te proporciona el proveedor (keys o tokens de API). Cada una tiene un **modo sandbox** para hacer pruebas antes de activar en producción.

## Métodos Manuales

### Transferencia Bancaria
Configura los datos de tu(s) cuenta(s) bancaria(s):
- Nombre del banco
- Número de cuenta
- CCI (Código de Cuenta Interbancario)
- Nombre del titular

Puedes agregar múltiples cuentas (ej: BCP + Interbank).

### Contra Entrega
El comprador paga al recibir el pedido. Solo activa o desactiva esta opción.

### QR Wallets (Yape / Plin)
Configura:
- Número de celular vinculado
- Imagen del código QR
- Nombre del titular

### PayPal
Configura con tu Client ID y Secret de la cuenta PayPal Business.

## Configuración de cada método

Cada método de pago tiene:
- **Credenciales propias** (keys, tokens, datos bancarios)
- **Modo sandbox / producción** — usa sandbox para pruebas, producción para operación real
- **Activar / desactivar** individualmente
- **Recargo configurable** — puedes cobrar un porcentaje adicional al usar cierto método

## Preguntas frecuentes

**¿Qué método es más fácil de activar para empezar?**
Yape/Plin o Transferencia Bancaria son los más rápidos de configurar ya que no requieren integración técnica: solo subes tu QR o datos bancarios.

**¿Puedo cobrar un recargo por pagar con tarjeta?**
Sí. Cada método tiene un campo de comisión/recargo configurable que se suma al total del pedido.

**¿Qué es el modo sandbox?**
Es un modo de prueba donde puedes hacer pedidos y pagos simulados sin mover dinero real. Úsalo para verificar que todo funcione antes de abrir tu tienda.

**¿Cómo sé qué pasarela usar?**
Depende de tu volumen y las tarifas de comisión de cada una. Te recomendamos comparar las comisiones de Culqi, Niubiz e Izipay según tu rubro y volumen de ventas.

**¿Puedo ver cuánto recibí por cada método de pago?**
Sí, en **Reportes** hay un reporte de ventas por pasarela de pago.
