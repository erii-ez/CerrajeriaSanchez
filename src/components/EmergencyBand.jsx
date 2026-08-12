export default function EmergencyBand() {
  return (
    <section style={{ backgroundColor: 'var(--orange)', padding: '32px 24px', textAlign: 'center', color: 'white' }}>
      <div className="content-container">
        <h2 className="font-display" style={{ fontSize: '28px', marginBottom: '16px' }}>¿ESTÁS EN UNA EMERGENCIA AHORA MISMO?</h2>
        <a
          href="tel:+524686893743"
          style={{ backgroundColor: 'white', color: 'var(--orange)', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
        >
          📞 468 689 3743
        </a>
      </div>
    </section>
  );
}