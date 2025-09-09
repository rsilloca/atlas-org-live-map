import { OrgNode, GraphNode, GraphLink } from '../types';

export const transformToGraphData = (nodes: OrgNode[]): { nodes: GraphNode[], links: GraphLink[] } => {
  const graphNodes: GraphNode[] = [];
  const graphLinks: GraphLink[] = [];

  const processNode = (node: OrgNode, level: number = 0, parentId?: string) => {
    const graphNode: GraphNode = {
      id: node.id,
      name: node.name,
      type: node.type || 'organization',
      members: node.members || 0,
      country: node.country || '',
      level
    };
    
    graphNodes.push(graphNode);
    
    if (parentId) {
      graphLinks.push({
        source: parentId,
        target: node.id,
        type: 'hierarchy'
      });
    }
    
    node.childrenDetails.forEach(child => {
      processNode(child, level + 1, node.id);
    });
  };

  nodes.forEach(node => processNode(node));
  return { nodes: graphNodes, links: graphLinks };
};