import React, { useState, useRef, useEffect } from 'react';
import { FaCoffee, FaBoxes, FaUsers, FaChartBar, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import avatarImg from '../../../assets/cafe.jpg';

const COLORS = {
  primary: '#4B2E19', // Café oscuro
  secondary: '#A67C52', // Café claro/dorado
  accent: '#F5E9DA', // Crema
  highlight: '#D9B382', // Dorado suave
  white: '#fff',
  danger: '#d32f2f',
  shadow: '#0002',
};

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<'pedidos' | 'inventario' | 'empleados' | 'reportes'>('pedidos');
  const userRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Contenido de cada sección
  const renderSection = () => {
    switch (section) {
      case 'pedidos':
        return <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: COLORS.primary}}>Pedidos</h2>;
      case 'inventario':
        return <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: COLORS.primary}}>Inventario</h2>;
      case 'empleados':
        return <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: COLORS.primary}}>Empleados</h2>;
      case 'reportes':
        return <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: COLORS.primary}}>Reportes</h2>;
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${COLORS.accent} 70%, ${COLORS.highlight} 100%)`, display: 'flex', flexDirection: 'column' }}>
      {/* Barra superior */}
      <header style={{ height: 70, background: `linear-gradient(90deg, ${COLORS.primary} 80%, ${COLORS.secondary} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', boxShadow: `0 2px 8px ${COLORS.shadow}` }}>
        <div style={{ fontWeight: 900, fontSize: 36, color: COLORS.accent, letterSpacing: 2, fontFamily: 'Georgia, serif', textShadow: `0 2px 8px ${COLORS.shadow}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaCoffee style={{ marginRight: 8, fontSize: 36, color: COLORS.highlight }} /> KAFFECITO
        </div>
        <div ref={userRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => setMenuOpen((v) => !v)}>
          <img src={avatarImg} alt="avatar" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${COLORS.secondary}`, boxShadow: `0 2px 8px ${COLORS.shadow}` }} />
          <span style={{ fontWeight: 700, color: COLORS.accent, fontSize: 18 }}>LUCAS</span>
          <FaChevronDown style={{ color: COLORS.accent, fontSize: 20, marginLeft: 4 }} />
          {menuOpen && (
            <div style={{ position: 'absolute', top: 56, right: 0, background: COLORS.white, borderRadius: 12, boxShadow: `0 4px 24px ${COLORS.shadow}`, minWidth: 160, zIndex: 10, padding: '8px 0', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <button style={{ background: 'none', border: 'none', padding: '12px 20px', textAlign: 'left', fontSize: 16, color: COLORS.primary, fontWeight: 600, cursor: 'pointer', borderBottom: `1px solid ${COLORS.accent}` }}>Perfil</button>
              <button style={{ background: 'none', border: 'none', padding: '12px 20px', textAlign: 'left', fontSize: 16, color: COLORS.danger, fontWeight: 600, cursor: 'pointer' }}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Menú lateral */}
        <aside style={{ width: 250, background: `linear-gradient(135deg, ${COLORS.primary} 90%, ${COLORS.secondary} 100%)`, padding: '32px 0 16px 0', display: 'flex', flexDirection: 'column', gap: 24, boxShadow: `2px 0 8px ${COLORS.shadow}`, alignItems: 'stretch', justifyContent: 'flex-start', minHeight: 'calc(100vh - 70px)' }}>
          <button onClick={() => setSection('pedidos')} style={{ background: section === 'pedidos' ? COLORS.accent : 'none', color: section === 'pedidos' ? COLORS.primary : COLORS.accent, fontWeight: 700, fontSize: 22, border: section === 'pedidos' ? `2px solid ${COLORS.primary}` : 'none', borderRadius: 32, padding: '16px 0', margin: '0 20px', marginBottom: 8, boxShadow: section === 'pedidos' ? `0 2px 8px ${COLORS.shadow}` : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.2s' }}><FaCoffee />Pedidos</button>
          <button onClick={() => setSection('inventario')} style={{ background: section === 'inventario' ? COLORS.accent : 'none', color: section === 'inventario' ? COLORS.primary : COLORS.accent, fontWeight: 700, fontSize: 22, border: section === 'inventario' ? `2px solid ${COLORS.primary}` : 'none', borderRadius: 32, padding: '16px 0', margin: '0 20px', boxShadow: section === 'inventario' ? `0 2px 8px ${COLORS.shadow}` : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.2s' }}><FaBoxes />Inventario</button>
          <button onClick={() => setSection('empleados')} style={{ background: section === 'empleados' ? COLORS.accent : 'none', color: section === 'empleados' ? COLORS.primary : COLORS.accent, fontWeight: 700, fontSize: 22, border: section === 'empleados' ? `2px solid ${COLORS.primary}` : 'none', borderRadius: 32, padding: '16px 0', margin: '0 20px', boxShadow: section === 'empleados' ? `0 2px 8px ${COLORS.shadow}` : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.2s' }}><FaUsers />Empleados</button>
          <button onClick={() => setSection('reportes')} style={{ background: section === 'reportes' ? COLORS.accent : 'none', color: section === 'reportes' ? COLORS.primary : COLORS.accent, fontWeight: 700, fontSize: 22, border: section === 'reportes' ? `2px solid ${COLORS.primary}` : 'none', borderRadius: 32, padding: '16px 0', margin: '0 20px', boxShadow: section === 'reportes' ? `0 2px 8px ${COLORS.shadow}` : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.2s' }}><FaChartBar />Reportes</button>
          <div style={{ flex: 1 }} />
          <button style={{ background: COLORS.white, color: COLORS.danger, fontWeight: 700, fontSize: 20, border: `2px solid ${COLORS.danger}`, borderRadius: 32, padding: '14px 0', margin: '16px 20px 0 20px', boxShadow: `0 2px 8px ${COLORS.danger}22`, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s' }}><FaSignOutAlt />Cerrar sesión</button>
        </aside>
        {/* Contenido principal */}
        <main style={{ flex: 1, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', background: `linear-gradient(135deg, ${COLORS.accent} 80%, ${COLORS.white} 100%)` }}>
          {renderSection()}
        </main>
      </div>
      {/* Footer minimalista */}
      <footer style={{ width: '100%', background: `linear-gradient(90deg, ${COLORS.primary} 60%, ${COLORS.secondary} 100%)`, color: COLORS.accent, textAlign: 'center', padding: '18px 0 10px 0', fontSize: 16, fontWeight: 500, letterSpacing: 1, fontFamily: 'Georgia, serif', boxShadow: `0 -2px 12px ${COLORS.shadow}`, marginTop: 'auto' }}>
        © {new Date().getFullYear()} Kaffecito. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default DashboardLayout; 