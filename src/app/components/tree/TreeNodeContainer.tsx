import React, { useCallback, useState } from 'react';
import { OrgNode } from '../../types';
import { useTreeExpansion } from '../../hooks/useTreeExpansion';
import { TreeNode } from './TreeNode';

interface TreeNodeContainerProps {
    node: OrgNode;
    level: number;
}

export const TreeNodeContainer: React.FC<TreeNodeContainerProps> = ({
    node,
    level
}) => {
    const { toggleExpanded, isExpanded } = useTreeExpansion();
    const [isLoading, setIsLoading] = useState(false);

    const handleToggleExpanded = useCallback(async (nodeId: string) => {
        if (!isExpanded(nodeId) && node.childrenDetails.length > 0) {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 300));
            setIsLoading(false);
        }
        toggleExpanded(nodeId);
    }, [node.childrenDetails.length, isExpanded, toggleExpanded]);

    return (
        <TreeNode
            node={node}
            level={level}
            isExpanded={isExpanded(node.id)}
            onToggleExpanded={handleToggleExpanded}
            isLoading={isLoading}
        >
            {node.childrenDetails.map((child) => (
                <TreeNodeContainer
                    key={child.id}
                    node={child}
                    level={level + 1}
                />
            ))}
        </TreeNode>
    );
};