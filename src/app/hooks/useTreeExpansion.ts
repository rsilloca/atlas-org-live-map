import { useState, useCallback } from 'react';

export const useTreeExpansion = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  
  const toggleExpanded = useCallback((nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  }, []);
  
  const isExpanded = useCallback((nodeId: string) => {
    return expandedNodes.has(nodeId);
  }, [expandedNodes]);
  
  return { toggleExpanded, isExpanded };
};