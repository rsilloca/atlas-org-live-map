import { TriangleAlert } from 'lucide-react';
import React from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  className = '' 
}) => {
  return (
    <div className={`text-center space-y-4 p-8 bg-white rounded-xl shadow-lg ${className}`}>
      <div className="text-red-500 text-4xl"><TriangleAlert /></div>
      <h2 className="text-xl font-semibold text-gray-700">Error de Conexión</h2>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};