import { Building, Network, Users } from 'lucide-react';

export const getNodeStyle = (type: string | undefined) => {
  switch (type) {
    case 'organization':
      return {
        icon: Building,
        bgColor: 'bg-blue-500',
        textColor: 'text-white',
        borderColor: 'border-blue-200',
        hoverColor: 'hover:bg-blue-700'
      };
    case 'area':
      return {
        icon: Network,
        bgColor: 'bg-emerald-500',
        textColor: 'text-white',
        borderColor: 'border-emerald-200',
        hoverColor: 'hover:bg-emerald-700'
      };
    case 'subarea':
      return {
        icon: Users,
        bgColor: 'bg-orange-400',
        textColor: 'text-white',
        borderColor: 'border-orange-200',
        hoverColor: 'hover:bg-orange-600'
      };
    case 'team':
      return {
        icon: Users,
        bgColor: 'bg-violet-400',
        textColor: 'text-white',
        borderColor: 'border-violet-200',
        hoverColor: 'hover:bg-violet-600'
      };
    default:
      return {
        icon: Building,
        bgColor: 'bg-gray-500',
        textColor: 'text-white',
        borderColor: 'border-gray-200',
        hoverColor: 'hover:bg-gray-700'
      };
  }
};