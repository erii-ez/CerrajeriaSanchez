import { useState } from 'react'; // 1. Importamos useState

export default function ServiceCard({ title, description, icon, isEmergency, price, isSelected, onClick }) {
  // 2. Creamos un estado local para saber si el ratón está encima de esta tarjeta específica
  const [isHovered, setIsHovered] = useState(false);

  // 3. Lógica dinámica para la sombra
  // Si está seleccionada -> Sombra naranja
  // Si no está seleccionada pero el ratón está encima -> Sombra oscura pronunciada
  // Si no pasa nada -> Sombra sutil por defecto
  const shadowStyle = isSelected 
    ? '0 8px 20px rgba(255, 90, 0, 0.15)' 
    : (isHovered ? '0 12px 24px rgba(10, 22, 40, 0.12)' : '0 4px 6px rgba(0,0,0,0.02)');

  const cardStyle = {
    border: isSelected 
      ? '2px solid var(--orange)' 
      : (isEmergency ? '2px solid rgba(255, 90, 0, 0.5)' : '1px solid var(--border-subtle)'),
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: isSelected ? '#fffaf8' : 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    boxShadow: shadowStyle, // Aplicamos la variable de la sombra
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    // Si está seleccionada o tiene el ratón encima, la tarjeta da un pequeño salto
    transform: (isSelected || isHovered) ? 'translateY(-4px)' : 'none' 
  };

  const iconWrapperStyle = {
    backgroundColor: (isEmergency || isSelected) ? 'var(--orange)' : 'var(--bg-light)',
    color: (isEmergency || isSelected) ? 'white' : 'var(--navy)',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <article 
      style={cardStyle} 
      onClick={onClick}
      // 4. Agregamos los oyentes de eventos del DOM para detectar el ratón
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={iconWrapperStyle}>
            {icon}
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>
              {title}
            </h3>
            {price && (
              <span style={{ fontSize: '14px', color: 'var(--text-gray)', fontWeight: '500' }}>
                Desde {price}
              </span>
            )}
          </div>
        </div>
        
        {isEmergency && (
          <span style={{ backgroundColor: 'var(--orange)', color: 'white', fontSize: '10px', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>
            24/7
          </span>
        )}
      </div>
      
      <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.5', margin: 0 }}>
        {description}
      </p>
    </article>
  );
}