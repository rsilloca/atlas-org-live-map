import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { OrgNode } from '../../types';
import { getNodeStyle } from '../../utils/nodeStyles';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { NodeDetails } from './NodeDetails';

interface TreeNodeProps {
  node: OrgNode;
  level: number;
  isExpanded: boolean;
  onToggleExpanded: (nodeId: string) => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level,
  isExpanded,
  onToggleExpanded,
  isLoading = false,
  children
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const hasChildren = node.childrenDetails && node.childrenDetails.length > 0;

  const nodeStyle = getNodeStyle(node.type);
  const IconComponent = nodeStyle.icon;
  const paddingLeft = level * 24;

  return (
    <div className="select-none">
      <div
        className={`flex items-center p-4 mb-3 rounded-xl border-2 ${nodeStyle.borderColor} ${nodeStyle.bgColor} ${nodeStyle.hoverColor} cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg`}
        style={{ marginLeft: `${paddingLeft}px` }}
        onClick={() => {
          if (hasChildren) {
            onToggleExpanded(node.id);
          }
          setShowDetails(!showDetails);
        }}
      >
        <div className="flex items-center flex-1 min-w-0">
          {hasChildren && (
            <div className="mr-3 p-1 rounded-full bg-white/20">
              {isLoading ? (
                <LoadingSpinner size="sm" className="text-white" />
              ) : isExpanded ? (
                <ChevronDown className="w-4 h-4 text-white" />
              ) : (
                <ChevronRight className="w-4 h-4 text-white" />
              )}
            </div>
          )}

          <div className="mr-3 p-2 rounded-full bg-white/20">
            <IconComponent className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-lg ${nodeStyle.textColor} truncate`}>
              {node.name}
            </h3>

            {showDetails && (
              <NodeDetails node={node} textColor="text-white/90" />
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3 text-white/80">
          <div className="text-right">
            <div className="text-sm font-medium">{node.members}</div>
            <div className="text-xs">miembros</div>
          </div>
        </div>
      </div>

      {isExpanded && hasChildren && (
        <div className="animate-in slide-in-from-top-4 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};