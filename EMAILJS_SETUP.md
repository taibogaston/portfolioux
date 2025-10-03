# Configuración de EmailJS

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- Verifica tu email

### 2. Configurar servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta de email
- Copia el **Service ID** que se genera

### 3. Crear template de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa este template:

```
Subject: Nuevo mensaje de contacto - {{subject}}

De: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado desde el portfolio de Maitena
```

- Copia el **Template ID** que se genera

### 4. Obtener Public Key
- Ve a "Account" → "General"
- Copia tu **Public Key**

### 5. Configurar variables de entorno
- Crea un archivo `.env.local` en la raíz del proyecto
- Agrega estas variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Probar el formulario
- Ejecuta `npm run dev`
- Ve a la sección de contacto
- Envía un mensaje de prueba
- Verifica que recibas el email

## Variables del template
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje

## Límites del plan gratuito
- 200 emails por mes
- 2 servicios de email
- 2 templates
- Soporte por email

## Solución de problemas
- Verifica que las variables de entorno estén correctas
- Asegúrate de que el servicio de email esté activo
- Revisa la consola del navegador para errores
- Verifica que el template tenga las variables correctas
