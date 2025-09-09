import React from 'react';
import { Users, MapPin } from 'lucide-react';
import { OrgNode } from '../../types';

interface NodeDetailsProps {
  node: OrgNode;
  textColor: string;
}

export const NodeDetails: React.FC<NodeDetailsProps> = ({ node, textColor }) => {
  return (
    <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
      <div className={`flex items-center ${textColor} text-sm`}>
        <Users className="w-4 h-4 mr-2" />
        <span>{node.members} miembros</span>
      </div>
      <div className={`flex items-center ${textColor} text-sm`}>
        <MapPin className="w-4 h-4 mr-2" />
        <span>{node.country}</span>
      </div>
      <div className={`${textColor.replace('text-white/90', 'text-white/75')} text-xs uppercase tracking-wider font-medium`}>
        {node.type}
      </div>
    </div>
  );
};