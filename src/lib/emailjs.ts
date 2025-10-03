import emailjs from '@emailjs/browser';

// Configuración de EmailJS
export const EMAILJS_CONFIG = {
  // Reemplaza estos valores con tus credenciales de EmailJS
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Inicializar EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Enviar email usando EmailJS
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
