
import React from 'react';

interface InfoCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  variant?: 'red' | 'white' | 'blue';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon, variant = 'white' }) => {
  const styles = {
    red: 'bg-red-50 border-red-200 text-red-900',
    white: 'bg-white border-gray-100 text-gray-800 shadow-sm',
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 ${styles[variant]}`}>
      <div className="flex items-center gap-4 mb-4">
        {icon && <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>}
        <h3 className="text-xl font-bold uppercase tracking-wide">{title}</h3>
      </div>
      <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
        {content}
      </p>
    </div>
  );
};

export default InfoCard;
