import React from 'react';
import cafeImg from '../assets/cafe.jpg';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#ede0d4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          width: '950px',
          minHeight: '600px',
          boxShadow: '0 8px 48px #b98c5e33',
          borderRadius: 24,
          overflow: 'hidden',
          background: '#fff',
          flexDirection: window.innerWidth < 800 ? 'column' : 'row',
          maxWidth: '98vw',
        }}
      >
        {/* Lado izquierdo: Logo y fondo café */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: window.innerWidth < 800 ? '100%' : '50%',
            background: 'linear-gradient(135deg, #b98c5e 70%, #6f4e37 100%)',
            padding: window.innerWidth < 800 ? 24 : 40,
            minHeight: window.innerWidth < 800 ? 180 : undefined,
          }}
        >
          <img
            src={cafeImg}
            alt="Kaffecito Logo"
            style={{
              width: window.innerWidth < 800 ? 220 : 340,
              height: window.innerWidth < 800 ? 120 : 200,
              objectFit: 'cover',
              borderRadius: 18,
              boxShadow: '0 8px 32px #6f4e3788',
              marginBottom: window.innerWidth < 800 ? 18 : 36,
              border: '3px solid #fff',
            }}
          />
          <h1
            style={{
              fontSize: window.innerWidth < 800 ? 32 : 48,
              fontWeight: 900,
              color: '#fff',
              letterSpacing: 3,
              textShadow: '0 2px 12px #6f4e37',
              fontFamily: 'Georgia, serif',
              margin: 0,
              marginTop: window.innerWidth < 800 ? 6 : 12,
              textAlign: 'center',
            }}
          >
            KAFFECITO
          </h1>
        </div>
        {/* Lado derecho: Formulario */}
        <div
          style={{
            display: 'flex',
            width: window.innerWidth < 800 ? '100%' : '50%',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            padding: window.innerWidth < 800 ? 16 : 0,
          }}
        >
          <div style={{ width: '100%', maxWidth: 400, padding: window.innerWidth < 800 ? 16 : 40 }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
