import { catalogoServicios, categorias } from '../data/servicios';
import ServiceCard from './ServiceCard';

export default function ServicesPreview() {
  const destacados = categorias.map((cat) => {
    const serviciosDeCategoria = catalogoServicios.filter(s => s.category === cat.slug);
    return serviciosDeCategoria.find(s => s.isEmergency) || serviciosDeCategoria[0];
  });

  return (
    <section style={{ padding: '48px 24px', backgroundColor: 'var(--bg-light)' }}>
      <div className="content-container">
        <p style={{ color: 'var(--orange)', fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>
          NUESTROS SERVICIOS
        </p>
        <h2 className="font-display" style={{ fontSize: '32px', marginBottom: '24px' }}>
          ¿EN QUÉ TE AYUDAMOS?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {destacados.map((servicio) => (
            <ServiceCard
              key={servicio.id}
              title={servicio.title}
              icon={servicio.icon}
              description={servicio.description}
              isEmergency={servicio.isEmergency}
              price={servicio.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}