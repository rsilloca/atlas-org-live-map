import { ApiResponse } from "../types";

export const mockApiData: ApiResponse = {
  success: true,
  message: "Operación Exitosa",
  data: [
    {
      id: "org-1",
      name: "Atlas Technology",
      type: "organization",
      members: 450,
      country: "España",
      childrenDetails: [
        {
          id: "org-1-1",
          name: "Desarrollo de Producto",
          type: "area",
          members: 85,
          country: "España",
          childrenDetails: [
            {
              id: "org-1-1-1",
              name: "Frontend Development",
              type: "subarea",
              members: 25,
              country: "España",
              childrenDetails: [
                {
                  id: "org-1-1-1-1",
                  name: "React Team",
                  type: "team",
                  members: 8,
                  country: "España",
                  childrenDetails: []
                },
                {
                  id: "org-1-1-1-2",
                  name: "Mobile Team",
                  type: "team",
                  members: 12,
                  country: "España",
                  childrenDetails: []
                }
              ]
            },
            {
              id: "org-1-1-2",
              name: "Backend Development",
              type: "subarea",
              members: 30,
              country: "España",
              childrenDetails: [
                {
                  id: "org-1-1-2-1",
                  name: "API Team",
                  type: "team",
                  members: 15,
                  country: "España",
                  childrenDetails: []
                }
              ]
            },
            {
              id: "org-1-1-3",
              name: "DevOps & Infrastructure",
              type: "subarea",
              members: 18,
              country: "España",
              childrenDetails: []
            }
          ]
        },
        {
          id: "org-1-2",
          name: "Operaciones",
          type: "area",
          members: 120,
          country: "España",
          childrenDetails: [
            {
              id: "org-1-2-1",
              name: "Customer Success",
              type: "subarea",
              members: 35,
              country: "España",
              childrenDetails: [
                {
                  id: "org-1-2-1-1",
                  name: "Support Team Alpha",
                  type: "team",
                  members: 12,
                  country: "España",
                  childrenDetails: []
                },
                {
                  id: "org-1-2-1-2",
                  name: "Support Team Beta",
                  type: "team",
                  members: 10,
                  country: "España",
                  childrenDetails: []
                }
              ]
            },
            {
              id: "org-1-2-2",
              name: "Sales & Marketing",
              type: "subarea",
              members: 45,
              country: "España",
              childrenDetails: []
            }
          ]
        },
        {
          id: "org-1-3",
          name: "Recursos Humanos",
          type: "area",
          members: 25,
          country: "España",
          childrenDetails: []
        }
      ]
    },
    {
      id: "org-2",
      name: "Atlas International",
      type: "organization",
      members: 280,
      country: "México",
      childrenDetails: [
        {
          id: "org-2-1",
          name: "Desarrollo Regional",
          type: "area",
          members: 95,
          country: "México",
          childrenDetails: [
            {
              id: "org-2-1-1",
              name: "Localización",
              type: "subarea",
              members: 22,
              country: "México",
              childrenDetails: []
            }
          ]
        },
        {
          id: "org-2-2",
          name: "Ventas LATAM",
          type: "area",
          members: 65,
          country: "México",
          childrenDetails: [
            {
              id: "org-2-2-1",
              name: "México & Centroamérica",
              type: "subarea",
              members: 28,
              country: "México",
              childrenDetails: [
                {
                  id: "org-2-2-1-1",
                  name: "Equipo México",
                  type: "team",
                  members: 15,
                  country: "México",
                  childrenDetails: []
                }
              ]
            },
            {
              id: "org-2-2-2",
              name: "Sudamérica",
              type: "subarea",
              members: 20,
              country: "Colombia",
              childrenDetails: []
            }
          ]
        },
        {
          id: "org-2-3",
          name: "Soporte Regional",
          type: "area",
          members: 40,
          country: "México",
          childrenDetails: []
        }
      ]
    }
  ]
};