export default function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--navy)', color: 'white', padding: '40px 24px', position: 'relative' }}>
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', marginBottom: '24px' }}>
        <span style={{ color: '#4ade80', marginRight: '6px' }}>●</span> Disponible ahora - Respuesta &lt; 15 min
      </div>
      
      <h1 className="font-display" style={{ fontSize: '64px', lineHeight: '0.9', marginBottom: '16px' }}>
        CERRAJERÍA <br/> <span className="text-orange">Sánchez</span>
      </h1>
      
      <p style={{ color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.5', marginBottom: '32px' }}>
        Más de <strong style={{ color: 'white' }}>20 años de experiencia</strong> en cerrajería profesional. Llegamos donde estés, cuando más lo necesitas.
      </p>

      <button style={{ width: '100%', padding: '18px', backgroundColor: 'var(--orange)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 20px var(--orange-glow)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        LLAMAR AHORA
      </button>
    </section>
  );
}