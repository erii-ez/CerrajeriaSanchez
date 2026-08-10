// src/pages/nosotros.jsx
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';

export default function Nosotros() {
  return (
    <BaseLayout>
      <Head>
        <title>Nuestra Historia | Cerrajería Sánchez</title>
      </Head>

      <section style={{ backgroundColor: 'var(--navy)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 className="font-display" style={{ fontSize: '48px', marginBottom: '16px' }}>NUESTRA HISTORIA</h1>
        <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
          Más de 20 años de experiencia sirviendo a la comunidad.
        </p>
      </section>
    </BaseLayout>
  );
}