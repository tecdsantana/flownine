import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-xl bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
      <div className="text-2xl md:text-3xl font-bold text-automato-gold mb-2">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
};

export default StatCard;
