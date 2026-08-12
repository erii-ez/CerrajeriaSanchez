import { useState } from 'react';
import Link from 'next/link';
import QuickServicesMenu from './QuickServicesMenu';
import { catalogoServicios, categorias } from '../data/servicios';

export default function Header() {
  // Estado para el menú principal
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para el submenú de servicios
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Lista de servicios para iterar en el submenú
const serviciosLista = catalogoServicios
  .filter(s => s.isEmergency) // solo urgencias en el acceso rápido del submenú
  .map(s => ({ id: s.id, nombre: s.title, slug: s.slug, isEmergency: s.isEmergency }));

  return (
    <header 
      style={{ position: 'sticky', top: 0, zIndex: 100 }}
      // EVENTO DEL PUNTERO: Si el ratón sale de toda el área del header/menú, se cierra todo.
      onMouseLeave={() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }}
    >
<div style={{
  backgroundColor: 'var(--navy)',
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 101
}}>
        
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ background: 'var(--orange)', borderRadius: '6px', padding: '4px 6px', display: 'flex' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
          </div>
          <div style={{ lineHeight: '1', fontFamily: 'var(--font-display)', color: 'white' }}>
            <span style={{ fontSize: '16px', display: 'block' }}>CERRAJERÍA</span>
            <span style={{ fontSize: '16px', color: 'var(--orange)' }}>SÁNCHEZ</span>
          </div>
        </Link>
         <QuickServicesMenu />
<button 
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-expanded={isMenuOpen}
  aria-haspopup="true"
  aria-label="Abrir menú de navegación"
  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--navy-light)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
          zIndex: 100,
          borderTop: '1px solid #1c2e4a'
        }}>
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            style={{ color: 'white', padding: '20px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: '500', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            Inicio
          </Link>
          
          {/* Contenedor del Submenú de Servicios */}
          <div 
            // EVENTOS DEL PUNTERO: Controlan la apertura y cierre del submenú
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <Link 
              href="/servicios" 
              onClick={() => setIsMenuOpen(false)}
              style={{ color: 'white', padding: '20px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: '500', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              Catálogo y Cotizaciones
              {/* Ícono de flecha que rota si el submenú está abierto */}
              <svg style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>

            {/* Despliegue dinámico de los servicios */}
            {isServicesOpen && (
              <div style={{ backgroundColor: 'var(--navy)', display: 'flex', flexDirection: 'column' }}>
{serviciosLista.map((servicio) => (
  <Link 
    key={servicio.id}
    href={`/servicios?service=${servicio.slug}`}
    onClick={() => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    }}
    style={{ 
      color: 'var(--text-gray)', 
      padding: '12px 24px 12px 48px', 
      textDecoration: 'none', 
      fontSize: '14px',
      borderBottom: '1px solid rgba(255,255,255,0.02)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}
  >
    {servicio.nombre}
    {servicio.isEmergency && (
      <span style={{ backgroundColor: 'var(--orange)', color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>
        24/7
      </span>
    )}
  </Link>
))}
              </div>
            )}
          </div>

          <Link 
            href="/nosotros" 
            onClick={() => setIsMenuOpen(false)}
            style={{ color: 'white', padding: '20px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}
          >
            Nuestra Historia
          </Link>
        </nav>
      )}
    </header>
  );
}