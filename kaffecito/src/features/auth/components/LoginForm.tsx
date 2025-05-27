import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const isMobile = () => window.innerWidth < 500;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focus, setFocus] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
  const navigate = useNavigate();

  const inputStyle = (focused: boolean) => ({
    border: focused ? '2px solid #b98c5e' : '1.5px solid #bdbdbd',
    borderRadius: 10,
    padding: isMobile() ? '12px 12px' : '18px 20px',
    fontSize: isMobile() ? 15 : 19,
    fontFamily: 'inherit',
    outline: 'none',
    background: '#f8f6f4',
    transition: 'border 0.2s',
    boxShadow: focused ? '0 2px 8px #b98c5e22' : 'none',
    color: '#6f4e37',
    width: '100%',
    boxSizing: 'border-box' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === 'admin@gmail.com') {
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile() ? 16 : 28,
        background: '#fff',
        borderRadius: 18,
        boxShadow: '0 4px 32px #b98c5e22',
        padding: isMobile() ? 16 : 32,
        width: '100%',
        maxWidth: 400,
        minWidth: isMobile() ? 0 : 320,
      }}
    >
      <h2 style={{ fontSize: isMobile() ? 22 : 34, fontWeight: 900, textAlign: 'center', margin: 0, color: '#6f4e37', letterSpacing: 1, fontFamily: 'Georgia, serif' }}>Bienvenido</h2>
      <h3 style={{ fontSize: isMobile() ? 16 : 22, fontWeight: 600, textAlign: 'center', margin: 0, color: '#b98c5e', letterSpacing: 1, fontFamily: 'Georgia, serif' }}>Login</h3>
      <input
        type="email"
        placeholder="ejemplo@gmail.com "
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={() => setFocus(f => ({ ...f, email: true }))}
        onBlur={() => setFocus(f => ({ ...f, email: false }))}
        style={inputStyle(focus.email)}
      />
      <span style={{ color: '#b98c5e', fontSize: isMobile() ? 11 : 15, marginTop: -16, marginBottom: 8, marginLeft: 2 }}>Utiliza un correo valido para ingresar</span>
      <input
        type="password"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={() => setFocus(f => ({ ...f, password: true }))}
        onBlur={() => setFocus(f => ({ ...f, password: false }))}
        style={inputStyle(focus.password)}
      />
      <button
        type="submit"
        style={{
          marginTop: 8,
          background: 'linear-gradient(90deg, #b98c5e 60%, #6f4e37 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: isMobile() ? 16 : 22,
          border: 'none',
          borderRadius: 999,
          padding: isMobile() ? '12px 0' : '16px 0',
          boxShadow: '0 2px 12px #b98c5e44',
          cursor: 'pointer',
          letterSpacing: 1,
          fontFamily: 'Georgia, serif',
          transition: 'background 0.2s, box-shadow 0.2s',
          width: '100%',
        }}
        onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #6f4e37 60%, #b98c5e 100%)')}
        onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #b98c5e 60%, #6f4e37 100%)')}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
