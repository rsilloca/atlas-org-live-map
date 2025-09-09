import React from 'react';

export const GraphInstructions: React.FC = () => {
    return (
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md max-w-xs">
            <div className="text-xs text-gray-600 space-y-1">
                <div>• <strong>Arrastra</strong> para reorganizar</div>
                <div>• <strong>Hover</strong> para ver detalles</div>
                <div>• <strong>Scroll</strong> para hacer zoom</div>
            </div>
        </div>
    );
};