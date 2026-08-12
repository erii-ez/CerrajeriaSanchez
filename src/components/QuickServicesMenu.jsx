// src/components/QuickServicesMenu.jsx
import Link from 'next/link';

export default function QuickServicesMenu() {
  // Solo los accesos más buscados: prioriza velocidad sobre exhaustividad
  const accesosRapidos = [
    {
      id: 1,
      nombre: 'Auto',
      slug: 'apertura-automotriz',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      id: 2,
      nombre: 'Casa',
      slug: 'apertura-chapas-candados',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 4,
      nombre: 'Chip Auto',
      slug: 'copia-llaves-auto-chip',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      aria-label="Accesos rápidos a servicios"
      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
    >
      {accesosRapidos.map((acceso) => (
        <Link
          key={acceso.id}
          href={`/servicios?service=${acceso.slug}`}
          aria-label={acceso.nombre}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            color: 'white',
            textDecoration: 'none',
            padding: '4px 6px',
          }}
        >
          {acceso.icon}
          <span style={{ fontSize: '9px', color: 'var(--text-gray)' }}>{acceso.nombre}</span>
        </Link>
      ))}
    </nav>
  );
}