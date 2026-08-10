import { Resend } from 'resend';

// La clave secreta se lee desde las variables de entorno por seguridad
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { nombre, telefono, servicio, detalles } = req.body;

    const data = await resend.emails.send({
      from: 'Cotizaciones <onboarding@resend.dev>',
      to: ['chavezsanchezerick@gmail.com'], 
      subject: `Nueva solicitud de cotización: ${servicio}`,
      html: `
        <h3>Detalles de la solicitud</h3>
        <ul>
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Teléfono:</strong> ${telefono}</li>
          <li><strong>Servicio:</strong> ${servicio}</li>
        </ul>
        <p><strong>Comentarios:</strong> ${detalles}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Solicitud enviada', data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}