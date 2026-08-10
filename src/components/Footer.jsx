// src/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  const menuSimplificado = [
    { id: 1, nombre: 'Inicio', ruta: '/' },
    { id: 2, nombre: 'Servicios', ruta: '/servicios' },
    { id: 3, nombre: 'Nuestra Historia', ruta: '/nosotros' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--navy)', padding: '40px 24px 24px', color: 'white' }}>
      
      {/* Logo (mismo lockup que el Header) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
        <div style={{ background: 'var(--orange)', borderRadius: '6px', padding: '4px 6px', display: 'flex' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
        </div>
        <div style={{ lineHeight: '1', fontFamily: 'var(--font-display)' }}>
          <span style={{ fontSize: '16px', display: 'block' }}>CERRAJERÍA</span>
          <span style={{ fontSize: '16px', color: 'var(--orange)' }}>SÁNCHEZ</span>
        </div>
      </div>

      {/* Menú simplificado */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '28px', borderTop: '1px solid #1c2e4a', borderBottom: '1px solid #1c2e4a', padding: '16px 0' }}>
        {menuSimplificado.map((item) => (
          <Link
            key={item.id}
            href={item.ruta}
            style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: '14px', padding: '8px 0' }}
          >
            {item.nombre}
          </Link>
        ))}
      </nav>

      <a
        href="https://wa.me/524686893743?text=Hola%2C%20necesito%20apoyo%20de%20Cerrajer%C3%ADa%20S%C3%A1nchez"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '14px',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '15px',
          textDecoration: 'none',
          marginBottom: '24px'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.49-9.84-10.01-9.84Zm5.86 14.19c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.9-4.28-5.05-4.48-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.47.27-.29.6-.36.79-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.18 1.42Z"/>
        </svg>
        Contáctanos por WhatsApp
      </a>

      {/* Aviso legal */}
      <p style={{ fontSize: '11px', color: 'var(--text-gray)', textAlign: 'center' }}>
        © {new Date().getFullYear()} Cerrajería Sánchez. Todos los derechos reservados.
      </p>
    </footer>
  );
}