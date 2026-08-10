export default function StatsBar() {
  return (
    <section style={{ backgroundColor: 'var(--navy-light)', padding: '24px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1c2e4a' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div className="font-display text-orange" style={{ fontSize: '24px' }}>20+</div>
        <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>Años de<br/>experiencia</div>
      </div>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div className="font-display text-orange" style={{ fontSize: '24px' }}>1.2K+</div>
        <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>Clientes<br/>satisfechos</div>
      </div>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div className="font-display text-orange" style={{ fontSize: '24px' }}>&lt;15'</div>
        <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>Tiempo de<br/>respuesta</div>
      </div>
    </section>
  );
}