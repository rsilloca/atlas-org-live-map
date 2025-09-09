import React from 'react';
import { OrgNode } from '../../types';
import { TreeNodeContainer } from './TreeNodeContainer';

interface TreeViewProps {
    data: OrgNode[];
}

export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <div className="space-y-6">
            {data.map((organization) => (
                <TreeNodeContainer
                    key={organization.id}
                    node={organization}
                    level={0}
                />
            ))}
        </div>
    );
};