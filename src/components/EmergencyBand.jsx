export default function EmergencyBand() {
  return (
    <section style={{ backgroundColor: 'var(--orange)', padding: '32px 24px', textAlign: 'center', color: 'white' }}>
      <h2 className="font-display" style={{ fontSize: '28px', marginBottom: '16px' }}>¿ESTÁS EN UNA EMERGENCIA AHORA MISMO?</h2>
      <button style={{ backgroundColor: 'white', color: 'var(--orange)', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        📞 468 689 3743
      </button>
    </section>
  );
}       