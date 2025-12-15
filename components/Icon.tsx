import React from 'react';

// Simplified Icon component that uses Material Symbols
// Assumes the project already has Material Symbols loaded via index.html or similar
const Icon: React.FC<{ name: string; className?: string }> = ({ name, className = '' }) => {
  // Map some custom names to Material Symbols if needed
  const iconMap: { [key: string]: string } = {
    'home': 'home',
    'business': 'business',
    'forest': 'forest',
    'wb_sunny': 'wb_sunny',
    'phone': 'call',
    'email': 'mail',
    'arrow_forward': 'arrow_forward'
  };

  const symbol = iconMap[name] || name;

  return (
    <span className={`material-symbols-outlined select-none ${className}`}>
      {symbol}
    </span>
  );
};

export default Icon;