import { useState } from "react";
import { OrgNode, ViewMode } from "../../types";
import { mockApiData } from "../../data/mockData";
import { Header } from "../header/Header";
import { TreeNodeContainer } from "../tree/TreeNodeContainer";
import { OrganizationalGraph } from "../graph/OrganizationalGraph";
import { Network } from "lucide-react";

const DemoMap: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('tree');
  const [orgData] = useState<OrgNode[]>(mockApiData.data);
  
  const totalMembers = orgData.reduce((total, org) => total + (org.members || 0), 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        totalMembers={totalMembers}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {viewMode === 'tree' ? (
          <div className="space-y-6">
            {orgData.map((organization) => (
              <TreeNodeContainer
                key={organization.id}
                node={organization}
                level={0}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <OrganizationalGraph 
              data={orgData} 
              width={800} 
              height={600}
            />
          </div>
        )}
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
            <Network className="w-4 h-4" />
            <span>
              {viewMode === 'tree' 
                ? 'Haz clic en cualquier área para explorar su estructura interna'
                : 'Vista de grafo simplificada - arrastra para explorar'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoMap;