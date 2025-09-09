import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface GraphControlsProps {
    onZoomIn: () => void;
    onZoomOut: () => void;
    onReset: () => void;
}

export const GraphControls: React.FC<GraphControlsProps> = ({
    onZoomIn,
    onZoomOut,
    onReset
}) => {
    return (
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button
                onClick={onZoomIn}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors hover:cursor-pointer"
                title="Acercar"
            >
                <ZoomIn className="w-5 h-5 text-gray-600" />
            </button>
            <button
                onClick={onZoomOut}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors hover:cursor-pointer"
                title="Alejar"
            >
                <ZoomOut className="w-5 h-5 text-gray-600" />
            </button>
            <button
                onClick={onReset}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors hover:cursor-pointer"
                title="Reiniciar"
            >
                <RotateCcw className="w-5 h-5 text-gray-600" />
            </button>
        </div>
    );
};