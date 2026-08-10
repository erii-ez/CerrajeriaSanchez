import { useState, useEffect } from 'react';

export default function FormContact({ selectedServiceName }) {
  // Estados del formulario
  const [formData, setFormData] = useState({ nombre: '', telefono: '', detalles: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Lógica de horario nocturno (8 PM a 8 AM)
  const horaActual = new Date().getHours();
  const esHorarioNocturno = horaActual >= 22 || horaActual < 8;

  // Manejador del envío asíncrono
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación extra: si logran dar clic por error, no hace nada
    if (esHorarioNocturno) return; 

    setStatus('loading');

    try {
      // Petición asíncrona hacia nuestro propio backend en Next.js
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          servicio: selectedServiceName || 'Cotización General'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', telefono: '', detalles: '' }); // Limpiar formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '8px' }}>Solicita una Cotización</h3>
      
      {esHorarioNocturno ? (
        <div style={{ padding: '20px', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '8px', borderLeft: '4px solid #ffeeba', marginTop: '16px' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Atención fuera de horario comercial</h4>
          <p style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
            Nuestro horario para recepción de cotizaciones y diligencias asíncronas es de 8:00 AM a 8:00 PM. 
            Si te encuentras ante una urgencia, por favor comunícate inmediatamente a nuestra línea de atención continua.
          </p>
          <a href="tel:600000000" style={{ display: 'inline-block', backgroundColor: 'var(--orange)', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}>
            📞 Llamar a Emergencias 24/7
          </a>
        </div>
      ) : (
        <>
          <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '24px' }}>
            {selectedServiceName 
              ? `Estás solicitando información para: ${selectedServiceName}`
              : 'Selecciona un servicio del catálogo o envíanos tus dudas.'}
          </p>

          {status === 'success' ? (
            <div style={{ padding: '16px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
              ¡Solicitud enviada correctamente! Nos comunicaremos contigo pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                required 
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '16px' }}
              />
              <input 
                type="tel" 
                placeholder="Teléfono de contacto" 
                required 
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '16px' }}
              />
              <textarea 
                placeholder="Detalles de la diligencia o servicio (ej. Es un desalojo judicial programado para el viernes...)" 
                required 
                rows="4"
                value={formData.detalles}
                onChange={(e) => setFormData({...formData, detalles: e.target.value})}
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '16px', resize: 'vertical' }}
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{ 
                  padding: '16px', 
                  backgroundColor: 'var(--navy)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
              >
                {status === 'loading' ? 'Enviando solicitud...' : 'Enviar Solicitud'}
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}