// src/pages/servicios.jsx
import { useState } from 'react';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import ServiceCard from '../components/ServiceCard';
import FormContact from '../components/FormContact';
import SearchBar from '../components/SearchBar';
import { catalogoServicios, categorias } from '../data/servicios';

export default function Servicios() {
  const [selectedService, setSelectedService] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const coincideBusqueda = (servicio) =>
    servicio.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    servicio.description.toLowerCase().includes(busqueda.toLowerCase());

  const servicioEncontrado = catalogoServicios.find(s => s.id === selectedService);
  const nombreServicio = servicioEncontrado ? servicioEncontrado.title : '';

  // ¿Hay al menos un resultado en TODO el catálogo con la búsqueda actual?
  const hayResultados = catalogoServicios.some(coincideBusqueda);

  return (
    <BaseLayout>
      <Head>
        <title>Servicios y Catálogo | Cerrajería Sánchez</title>
      </Head>

      <section style={{ backgroundColor: 'var(--navy)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 className="font-display" style={{ fontSize: '48px', marginBottom: '16px' }}>CATÁLOGO DE SERVICIOS</h1>
        <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
          Selecciona un servicio para solicitar tu cotización o atención inmediata.
        </p>
      </section>

      <section style={{ padding: '60px 24px', backgroundColor: 'var(--bg-light)' }}>
        <SearchBar value={busqueda} onChange={setBusqueda} />

        {!hayResultados ? (
          <p style={{ textAlign: 'center', color: 'var(--text-gray)' }}>
            No encontramos servicios que coincidan con "{busqueda}".
          </p>
        ) : (
          categorias.map((cat) => {
            const serviciosDeCategoria = catalogoServicios
              .filter(s => s.category === cat.slug)
              .filter(coincideBusqueda);

            if (serviciosDeCategoria.length === 0) return null;

            return (
              <div key={cat.slug} style={{ maxWidth: '1200px', margin: '0 auto 48px' }}>
                <h2 className="font-display" style={{ fontSize: '28px', marginBottom: '20px', borderBottom: '2px solid var(--orange)', display: 'inline-block', paddingBottom: '4px' }}>
                  {cat.nombre}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px'
                }}>
                  {serviciosDeCategoria.map((servicio) => (
                    <ServiceCard
                      key={servicio.id}
                      title={servicio.title}
                      icon={servicio.icon}
                      description={servicio.description}
                      isEmergency={servicio.isEmergency}
                      price={servicio.price}
                      isSelected={selectedService === servicio.id}
                      onClick={() => setSelectedService(servicio.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      <section style={{ padding: '40px 24px', backgroundColor: 'var(--navy-light)', borderTop: '1px solid #1c2e4a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FormContact selectedServiceName={nombreServicio} />
        </div>
      </section>
    </BaseLayout>
  );
}