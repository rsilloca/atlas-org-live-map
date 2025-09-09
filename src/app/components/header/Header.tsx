import React from 'react';
import { ViewMode } from '../../types';
import { ViewModeToggle } from '../common/ViewModeToggle';

interface HeaderProps {
  totalMembers: number;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  totalMembers, 
  viewMode, 
  onViewModeChange 
}) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Atlas - Live Map
            </h1>
            <p className="mt-2 text-gray-600">
              Explora la estructura organizacional de manera interactiva
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <ViewModeToggle 
              viewMode={viewMode}
              onViewModeChange={onViewModeChange}
            />
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Online</span>
              </div>
              <div className="text-gray-400">|</div>
              <div>{totalMembers} miembros</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};