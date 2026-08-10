import { useState } from 'react'; // 1. Importamos useState
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import ServiceCard from '../components/ServiceCard';
import FormContact from '../components/FormContact';

export default function Servicios() {
  // 2. Creamos un estado para guardar el ID del servicio seleccionado. Empieza vacío (null).
  const [selectedService, setSelectedService] = useState(null);

  const catalogoServicios = [
    { id: 1, title: "Apertura Automotriz", icon: "🚗", description: "Apertura de vehículos sin daños...", isEmergency: true, price: "$500 MXN" },
    { id: 2, title: "Cerrajería Residencial", icon: "🏠", description: "Apertura de puertas principales...", isEmergency: false, price: "$450 MXN" },
    { id: 3, title: "Seguridad Comercial", icon: "🏢", description: "Control de acceso, cerraduras...", isEmergency: false, price: "$800 MXN" },
    { id: 4, title: "Apertura de Cajas Fuertes", icon: "🔐", description: "Servicio especializado en apertura...", isEmergency: false, price: "Cotización previa" },
    { id: 5, title: "Duplicado con Chip", icon: "🔑", description: "Corte y programación de llaves...", isEmergency: false, price: "$1,200 MXN" }
  ];

const servicioEncontrado = catalogoServicios.find(s => s.id === selectedService);
const nombreServicio = servicioEncontrado ? servicioEncontrado.title : '';

  return (
    <BaseLayout>
      <Head>
        <title>Servicios y Catálogo | Cerrajería Express</title>
      </Head>

      <section style={{ backgroundColor: 'var(--navy)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 className="font-display" style={{ fontSize: '48px', marginBottom: '16px' }}>CATÁLOGO DE SERVICIOS</h1>
        <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
          Selecciona un servicio para solicitar tu cotización o atención inmediata.
        </p>
      </section>

      <section style={{ padding: '60px 24px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {catalogoServicios.map((servicio) => (
            <ServiceCard 
              key={servicio.id}
              title={servicio.title}
              icon={servicio.icon}
              description={servicio.description}
              isEmergency={servicio.isEmergency}
              price={servicio.price}
              // 3. Le pasamos las nuevas propiedades a la tarjeta
              isSelected={selectedService === servicio.id}
              onClick={() => setSelectedService(servicio.id)}
            />
          ))}

        </div>
      </section>
      {/* Sección del Formulario Asíncrono */}
      <section style={{ padding: '40px 24px', backgroundColor: 'var(--navy-light)', borderTop: '1px solid #1c2e4a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FormContact selectedServiceName={nombreServicio} />
        </div>
      </section>
    </BaseLayout>
  );
}