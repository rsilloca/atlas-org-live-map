    import { useState, useEffect } from 'react';
import { OrgNode } from '../types';
import { mockApiData } from '../data/mockData';

export const useOrgData = () => {
  const [orgData, setOrgData] = useState<OrgNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setOrgData(mockApiData.data);
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  return { orgData, isLoading, error };
};