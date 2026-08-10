// src/components/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto 32px', position: 'relative' }}>
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Buscar servicio (ej. auto, cerradura, caja fuerte...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '14px 16px 14px 44px',
          borderRadius: '10px',
          border: '1px solid var(--border-subtle)',
          fontSize: '15px',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
}