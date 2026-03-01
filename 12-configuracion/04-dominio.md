# Dominio Propio

**Ruta:** Panel Administrador → Tu Tienda → Dominio

## ¿Qué es el Dominio Propio?

Por defecto, tu tienda tiene una URL como `tu-tienda.mitienda.pe`. Con el módulo de Dominio Propio puedes usar tu propio dominio, por ejemplo: `www.mitiendaoficial.com`.

## Pasos para configurar tu dominio

1. **Compra tu dominio** en un registrador (GoDaddy, Namecheap, NIC.pe, etc.) si no lo tienes
2. **Ingresa tu dominio** en este módulo (ej: `www.mitiendaoficial.com`)
3. **Configura el DNS** en tu registrador:
   - Agrega un registro CNAME apuntando a la dirección que te indica el sistema
   - O un registro A si tu registrador no soporta CNAME en el dominio raíz
4. **Espera la propagación** del DNS (puede tomar entre 5 minutos y 48 horas)
5. El sistema activa **SSL automáticamente** — tu tienda tendrá HTTPS sin que tengas que hacer nada adicional

## Preguntas frecuentes

**¿Cuánto tarda en funcionar el dominio?**
Depende de los servidores DNS de tu registrador. Generalmente entre 1 y 24 horas, aunque puede llegar a 48 horas en casos extremos.

**¿El SSL (HTTPS) tiene costo adicional?**
No. MiTienda incluye el certificado SSL de forma gratuita y automática.

**¿Puedo usar subdominios?**
Sí. Por ejemplo, `tienda.miempresa.com` funciona perfectamente con un registro CNAME.

**¿La URL antigua de mitienda.pe deja de funcionar?**
No. La URL de mitienda.pe sigue funcionando y redirige automáticamente a tu dominio personalizado.
