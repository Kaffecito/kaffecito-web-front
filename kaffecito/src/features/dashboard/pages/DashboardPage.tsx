import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0}}>Pedidos</h2>
      {/* Aquí irá la tabla y el contenido */}
    </DashboardLayout>
  );
};

export default DashboardPage; 