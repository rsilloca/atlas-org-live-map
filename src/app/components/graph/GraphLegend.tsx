import React from 'react';

export const GraphLegend: React.FC = () => {
    return (
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <h4 className="font-semibold text-sm mb-2">Leyenda</h4>
            <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>España</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>México</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span>Colombia</span>
                </div>
                <div className="text-gray-500 mt-2">
                    Tamaño = Número de miembros
                </div>
            </div>
        </div>
    );
};