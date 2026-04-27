---
title: Pasarelas de pago disponibles
description: "Pasarelas de pago integradas con MiTienda y TiendaBox por país (Perú, Ecuador, Colombia): descripción, tipos de pago aceptados, plan requerido y enlace oficial de cada pasarela."
---

# Pasarelas de pago disponibles para el vendedor

MiTienda y TiendaBox vienen integradas con las principales pasarelas de pago de cada país. Esta página describe qué pasarelas están disponibles para el vendedor, qué tipos de pago acepta cada una, desde qué plan se desbloquea y cómo contactarlas.

Esta es una guía de referencia para elegir qué pasarelas activar. Para el procedimiento de configuración paso a paso, ver [Formas de Pago](09-formas-pago.md).

## Cómo elegir una pasarela

Para que un vendedor pueda recibir pagos con tarjeta en su tienda, necesita:

1. **Una cuenta** en la pasarela de pago (registro y aprobación con la pasarela, no con MiTienda).
2. **Las credenciales** (API key, llaves o usuario) que entrega la pasarela al aprobar la cuenta.
3. **Activar la integración** en el panel administrador de la tienda, desde **Formas de Pago**.

Cada pasarela maneja sus propias **comisiones por transacción** y **tiempos de liquidación** (cuándo se deposita la plata en la cuenta bancaria del vendedor). Estas condiciones se negocian directamente con cada pasarela.

::: tip Sugerencia
Activar al menos 2 pasarelas y un método sin comisión (transferencia o pago contra entrega) maximiza la conversión: si una pasarela rechaza un pago, el comprador tiene una alternativa.
:::

## Pasarelas disponibles en Perú

### Mercadopago

Pasarela del grupo Mercado Libre. Procesa tarjetas de crédito y débito, billeteras digitales (Yape, Plin), pagos en efectivo (PagoEfectivo) y permite **cuotas sin intereses** según el banco emisor.

- **Disponible desde plan**: Micro
- **Tipos de pago**: tarjeta de crédito y débito, billeteras digitales, efectivo, cuotas
- **Web oficial**: [https://www.mercadopago.com.pe](https://www.mercadopago.com.pe)

### Culqi

Pasarela peruana del grupo Credicorp (BCP). Procesa tarjetas de crédito y débito de Visa, Mastercard, American Express y Diners. También acepta Yape integrado.

- **Disponible desde plan**: Small
- **Tipos de pago**: tarjeta de crédito y débito, Yape
- **Web oficial**: [https://www.culqi.com](https://www.culqi.com)

### Niubiz

Pasarela operada por Niubiz (antes VisaNet Perú). Procesa tarjetas de crédito y débito de Visa, Mastercard, American Express y Diners. Acepta cuotas sin intereses según el banco.

- **Disponible desde plan**: Small
- **Tipos de pago**: tarjeta de crédito y débito, cuotas
- **Web oficial**: [https://www.niubiz.com.pe](https://www.niubiz.com.pe)

### Izipay

Pasarela operada por Izipay (Niubiz/BBVA/Scotiabank/Banco Pichincha). Procesa tarjetas de crédito y débito y soluciones digitales.

- **Disponible desde plan**: Small
- **Tipos de pago**: tarjeta de crédito y débito
- **Web oficial**: [https://www.izipay.pe](https://www.izipay.pe)

### Yape / Plin

Billeteras móviles peruanas (Yape de BCP y Plin de Interbank/BBVA/Scotiabank). Permiten cobrar por código QR o número de celular asociado a la cuenta del vendedor. Algunas pasarelas (Mercadopago, Culqi) integran Yape de forma nativa; también se puede activar como método de pago independiente.

- **Disponible desde plan**: Small
- **Tipos de pago**: pago móvil con QR
- **Web oficial Yape**: [https://www.yape.com.pe](https://www.yape.com.pe)
- **Web oficial Plin**: [https://www.plin.com.pe](https://www.plin.com.pe)

### Openpay

Pasarela del grupo BBVA (origen mexicano, presencia en Perú). Procesa tarjetas de crédito y débito, soporta 3D Secure y cuotas.

- **Disponible desde plan**: Medium
- **Tipos de pago**: tarjeta de crédito y débito, cuotas, 3DS
- **Web oficial**: [https://www.openpay.pe](https://www.openpay.pe)

### PayPal

Pasarela global. Permite cobros en dólares y soles a clientes con cuenta PayPal o tarjeta. Útil para tiendas que venden al extranjero.

- **Disponible desde plan**: Medium
- **Tipos de pago**: cuenta PayPal, tarjeta internacional
- **Web oficial**: [https://www.paypal.com/pe](https://www.paypal.com/pe)

## Pasarelas disponibles en Ecuador

### Mercadopago

Pasarela del grupo Mercado Libre. Procesa tarjetas de crédito y débito, billeteras y cuotas.

- **Disponible desde plan**: Micro
- **Tipos de pago**: tarjeta de crédito y débito, cuotas
- **Web oficial**: [https://www.mercadopago.com.ec](https://www.mercadopago.com.ec)

### PayPhone

Pasarela ecuatoriana. Procesa tarjetas y billetera PayPhone, popular en pagos por enlace y QR en Ecuador.

- **Disponible desde plan**: Small
- **Tipos de pago**: tarjeta de crédito y débito, billetera PayPhone
- **Web oficial**: [https://www.payphone.app](https://www.payphone.app)

### Datafast

Pasarela ecuatoriana de Banco del Pichincha. Procesa tarjetas Visa, Mastercard, American Express y Diners con cuotas (Diferido).

- **Disponible desde plan**: Medium
- **Tipos de pago**: tarjeta de crédito y débito, cuotas (Diferido)
- **Web oficial**: [https://www.datafast.com.ec](https://www.datafast.com.ec)

### Kushki

Pasarela regional con cobertura LATAM (Ecuador, Colombia, Perú, Chile, México). Procesa tarjetas y métodos locales.

- **Disponible desde plan**: Medium
- **Tipos de pago**: tarjeta de crédito y débito, métodos locales
- **Web oficial**: [https://www.kushkipagos.com](https://www.kushkipagos.com)

### PayPal

Pasarela global. Permite cobros en dólares a clientes con cuenta PayPal o tarjeta.

- **Disponible desde plan**: Medium
- **Tipos de pago**: cuenta PayPal, tarjeta internacional
- **Web oficial**: [https://www.paypal.com/ec](https://www.paypal.com/ec)

### D-Local

Pasarela LATAM enfocada en cross-border (cobros desde y hacia varios países). Recomendada para tiendas con clientes internacionales.

- **Disponible desde plan**: Large
- **Tipos de pago**: tarjeta internacional, métodos locales LATAM
- **Web oficial**: [https://www.dlocal.com](https://www.dlocal.com)

## Pasarelas disponibles en Colombia

### Mercadopago

Pasarela del grupo Mercado Libre. Procesa tarjetas, PSE y billeteras.

- **Disponible desde plan**: Micro
- **Tipos de pago**: tarjeta de crédito y débito, PSE, billeteras
- **Web oficial**: [https://www.mercadopago.com.co](https://www.mercadopago.com.co)

### PayU

Pasarela del grupo PayU Latam (presencia en Colombia, México, Perú, Argentina, Brasil, Chile). Procesa tarjetas, PSE, Efecty y otros métodos locales.

- **Disponible desde plan**: Small
- **Tipos de pago**: tarjeta de crédito y débito, PSE, Efecty
- **Web oficial**: [https://www.payu.com.co](https://www.payu.com.co)

### Wompi

Pasarela del grupo Bancolombia. Procesa tarjetas, PSE, Nequi (billetera) y Bancolombia.

- **Disponible desde plan**: Medium
- **Tipos de pago**: tarjeta, PSE, Nequi, transferencia Bancolombia
- **Web oficial**: [https://wompi.co](https://wompi.co)

### PayPal

Pasarela global. Permite cobros en dólares a clientes con cuenta PayPal o tarjeta.

- **Disponible desde plan**: Medium
- **Tipos de pago**: cuenta PayPal, tarjeta internacional
- **Web oficial**: [https://www.paypal.com/co](https://www.paypal.com/co)

### D-Local

Pasarela LATAM enfocada en cross-border (cobros desde y hacia varios países).

- **Disponible desde plan**: Large
- **Tipos de pago**: tarjeta internacional, métodos locales LATAM
- **Web oficial**: [https://www.dlocal.com](https://www.dlocal.com)

## Métodos de pago sin pasarela

Además de las pasarelas, todos los planes permiten configurar métodos de pago manuales (sin comisión por transacción):

- **Pago contra entrega**: el comprador paga al recibir el pedido.
- **Transferencia / depósito bancario**: el comprador transfiere a una cuenta bancaria del vendedor y carga el voucher.
- **Yape / Plin manual**: el vendedor recibe el pago directamente y confirma el pedido en el panel.

Estos métodos no requieren contrato con una pasarela y suelen complementar a las pasarelas para reducir el costo total de procesamiento.

## Comisiones de las pasarelas

Las **comisiones por transacción** las define cada pasarela y se negocian directamente con ella. MiTienda y TiendaBox no cobran comisión adicional sobre los pagos procesados por la pasarela; la única comisión que cobra la plataforma es la **comisión por ventas del plan** (ver [Planes y Precios](19-planes-y-precios.md)), aplicada solo cuando las ventas mensuales superan el umbral del plan.

Para conocer las comisiones específicas, contactar directamente a la pasarela usando los enlaces oficiales listados arriba.

## Configuración

Para activar una pasarela en la tienda, ver el procedimiento detallado en [Formas de Pago](09-formas-pago.md).

## ¿Necesitas ayuda eligiendo pasarelas?

Si no estás seguro de qué pasarelas activar para tu negocio, [agenda una demo de 15 minutos](22-agendar-demo.md) con el equipo de MiTienda / TiendaBox y te orientamos según tu rubro y volumen esperado.
