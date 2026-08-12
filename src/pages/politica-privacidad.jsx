// src/pages/politica-privacidad.jsx
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';

export default function PoliticaPrivacidad() {
  return (
    <BaseLayout>
      <Head>
        <title>Política de Privacidad | Cerrajería Sánchez</title>
      </Head>

      <section style={{ backgroundColor: 'var(--navy)', color: 'white', padding: '48px 24px', textAlign: 'center' }}>
        <h1 className="font-display" style={{ fontSize: '36px' }}>POLÍTICA DE PRIVACIDAD</h1>
      </section>

      <section style={{ padding: '40px 24px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', color: 'var(--text-dark)' }}>
        <p style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-gray)' }}>
          Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>1. Datos que recopilamos</h2>
        <p style={{ marginBottom: '16px' }}>
          A través de nuestro formulario de cotización recopilamos: nombre, número telefónico,
          correo electrónico (opcional) y el servicio solicitado. Estos datos son necesarios
          únicamente para contactarte y brindarte el servicio solicitado.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>2. Uso de la información</h2>
        <p style={{ marginBottom: '16px' }}>
          Utilizamos tus datos exclusivamente para responder a tu solicitud de cotización o
          servicio de cerrajería. No compartimos, vendemos ni cedemos tu información a terceros
          con fines comerciales o publicitarios.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>3. Almacenamiento y seguridad</h2>
        <p style={{ marginBottom: '16px' }}>
          Los datos enviados por el formulario se transmiten de forma segura y se utilizan
          únicamente para el envío del correo de cotización correspondiente. No almacenamos
          tu información en bases de datos propias más allá del historial de correo necesario
          para dar seguimiento a tu solicitud.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>4. Tus derechos (ARCO)</h2>
        <p style={{ marginBottom: '16px' }}>
          Puedes solicitar en cualquier momento el Acceso, Rectificación, Cancelación u
          Oposición (derechos ARCO) al uso de tus datos personales, contactándonos directamente
          a través de nuestros medios de contacto.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>5. Cambios a esta política</h2>
        <p style={{ marginBottom: '16px' }}>
          Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio
          será publicado en esta misma página.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>6. Contacto</h2>
        <p>
          Para dudas sobre esta política, contáctanos a través de nuestro formulario de
          cotización o por WhatsApp.
        </p>
      </section>
    </BaseLayout>
  );
}