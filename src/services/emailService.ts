import emailjs from '@emailjs/browser';

// Initialize EmailJS with the public key
emailjs.init('KIfP7v28qY2nDkO2D');

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email, // Changed from form_email to from_email
      message: data.message,
      to_name: 'leonel Mezatio',
      reply_to: data.email
    };

    const response = await emailjs.send(
      'service_c8ombnh',
      'template_f49c9id',
      templateParams,
      'KIfP7v28qY2nDkO2D'
    );
    
    if (response.status !== 200) {
      throw new Error(`EmailJS returned status ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};