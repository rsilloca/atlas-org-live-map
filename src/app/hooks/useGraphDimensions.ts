import { useState, useEffect } from 'react';

export const useGraphDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth - 100, 1200);
      const height = Math.min(window.innerHeight - 300, 800);
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
};