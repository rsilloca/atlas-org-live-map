import React from 'react';
import { TreePine, GitBranch } from 'lucide-react';
import { ViewMode } from '../../types';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ 
  viewMode, 
  onViewModeChange 
}) => {
  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onViewModeChange('tree')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 hover:cursor-pointer ${
          viewMode === 'tree' 
            ? 'bg-white shadow-sm text-blue-600' 
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <TreePine className="w-4 h-4" />
        <span className="font-medium">Árbol</span>
      </button>
      <button
        onClick={() => onViewModeChange('graph')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 hover:cursor-pointer ${
          viewMode === 'graph' 
            ? 'bg-white shadow-sm text-blue-600' 
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <GitBranch className="w-4 h-4" />
        <span className="font-medium">Grafo</span>
      </button>
    </div>
  );
};