export default function ServicesPreview() {
  return (
    <section style={{ padding: '40px 24px', backgroundColor: 'var(--bg-light)' }}>
      <p className="font-display text-orange" style={{ fontSize: '14px', letterSpacing: '1px' }}>NUESTROS SERVICIOS</p>
      <h2 className="font-display" style={{ fontSize: '32px', color: 'var(--navy)', marginBottom: '24px' }}>¿EN QUÉ TE AYUDAMOS?</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ border: '2px solid var(--orange)', borderRadius: '12px', padding: '20px', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ background: 'var(--orange)', padding: '8px', borderRadius: '8px', color: 'white' }}>🚗</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Automotriz <span style={{ background: 'var(--orange)', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>24/7</span></h3>
          </div>
          <p style={{ fontSize: '13px', color: '#666' }}>Apertura de vehículos sin daños, duplicado de llaves con chip, programación de mandos.</p>
        </div>

        <div style={{ backgroundColor: 'var(--navy)', color: 'white', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '8px' }}>🏢</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Comercial</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Control de acceso, cerraduras de alta seguridad, sistemas de llave maestra para empresas.</p>
        </div>
      </div>
    </section>
  );
}