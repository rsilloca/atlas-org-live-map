import React from 'react';
import { Network } from 'lucide-react';
import { ViewMode } from '../../types';

interface FooterProps {
  viewMode: ViewMode;
}

export const Footer: React.FC<FooterProps> = ({ viewMode }) => {
  return (
    <div className="mt-16 text-center">
      <div className="inline-flex items-center space-x-2 text-gray-500 text-sm bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
        <Network className="w-4 h-4" />
        <span>
          {viewMode === 'tree' 
            ? 'Haz clic en cualquier área para explorar su estructura interna'
            : 'Arrastra los nodos, haz clic para destacar conexiones o usa zoom para explorar'
          }
        </span>
      </div>
    </div>
  );
};