# POS — Punto de Venta

El POS de MiTienda es una **aplicación independiente** (separada del Panel Administrador) diseñada para ventas presenciales en mostrador. Funciona en tablets o computadoras en tu local.

## ¿Para qué sirve el POS?

Para vender de forma presencial en tu tienda física o stand, registrando las ventas directamente en el sistema y manteniendo el inventario actualizado.

## Módulos del POS

### Venta Rápida
- Busca productos por nombre o SKU
- Escanea código de barras con lector
- Agrega productos al carrito
- Aplica descuentos manuales (requiere autorización de supervisor)
- Cobra con efectivo (calcula el vuelto automáticamente), tarjeta, transferencia o Yape/Plin
- Imprime ticket en impresora térmica de 80mm

### Turnos de Caja
- **Apertura de turno:** registra el monto inicial en caja
- **Cierre de turno:** hace el conteo de lo recaudado y genera el reporte del turno
- **Movimientos de efectivo:** registra entradas y salidas de efectivo durante el turno

### Empleados
- Cada empleado tiene un PIN de 4 a 6 dígitos para acceder al POS
- Se asignan por sucursal
- Los descuentos manuales requieren autorización del supervisor

### Sucursales y Cajas
- Cada sucursal tiene sus cajas asignadas
- Los empleados se asignan a una sucursal específica

## Los pedidos del POS se registran en tu Panel

Todos los pedidos realizados desde el POS aparecen en tu Panel Administrador bajo **Ventas → Pedidos** con el origen marcado como "POS".

## Preguntas frecuentes

**¿El POS funciona sin internet?**
No. El POS requiere conexión a internet para consultar el catálogo y registrar los pedidos en tiempo real.

**¿El stock se descuenta automáticamente al vender desde el POS?**
Sí. Cada venta desde el POS descuenta el stock del producto en tiempo real.

**¿Cómo accedo al POS?**
Ingresa a [pos.mitienda.pe](https://pos.mitienda.pe/) con tus credenciales. Es una aplicación separada del Panel Administrador.

**¿Qué impresoras son compatibles?**
Impresoras térmicas de 80mm con soporte para comandos ESC/POS (estándar de la industria).
