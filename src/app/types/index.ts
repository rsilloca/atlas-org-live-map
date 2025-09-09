export interface OrgNode {
  id: string;
  name: string;
  childrenDetails: OrgNode[];
  members?: number;
  country?: string;
  type?: 'organization' | 'area' | 'subarea' | 'team';
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: OrgNode[];
}

export interface GraphNode {
  id: string;
  name: string;
  type: string;
  members: number;
  country: string;
  level: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink {
  source: string;
  target: string;
  type: 'hierarchy';
}

export type ViewMode = 'tree' | 'graph';