# 📊 Atlas Live Map - Tree & Graph

Una aplicación completa para visualizar estructuras organizacionales con **doble vista**: árbol jerárquico y grafo interactivo. Construida con React, Tailwind, D3.js y TypeScript, permite explorar jerarquías empresariales de manera visual e interactiva.

## ✨ Características

### 🎯 Visualización Dual
- **Vista de Árbol** - Estructura jerárquica tradicional expandible
- **Vista de Grafo** - Grafo de fuerza dirigida que muestra conexiones
- **Nodos dinámicos** con tamaños proporcionales al número de miembros
- **Colores diferenciados** por país (España, México, Colombia)
- **Íconos representativos** para cada tipo de organización

### 🌳 Funcionalidades del Árbol
- **Expansión/Colapso** de nodos jerárquicos
- **Navegación intuitiva** por niveles organizacionales
- **Detalles de nodos** con información contextual
- **Vista compacta** optimizada para jerarquías profundas

### 🔍 Navegación Avanzada en Grafo
- **Zoom In/Out** con controles de botones
- **Reset** para volver a la vista inicial

### 🎮 Interactividad en Grafo
- **Arrastrar nodos** para reposicionarlos
- **Hover tooltips** con información detallada
- **Leyenda informativa** con códigos de colores

## 🚀 Tecnologías

- **React** - Framework principal
- **TypeScript** - Tipado estático
- **D3.js** - Visualización de datos y manipulación SVG
- **Tailwind CSS** - Estilos y diseño responsive
- **Lucide React** - Iconografía moderna

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/rsilloca/atlas-org-live-map.git

# Navegar al directorio
cd organizational-graph

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 🏗️ Estructura del Proyecto

```
src/app/
├── components/
|   ├── common
|   |   ├── ErrorMessage.tsx           # Para gestión de errores
|   |   ├── LoadingSpinner.tsx         # Indicador de carga reutilizable
|   |   ├── ViewModeToggle.tsx         # Componente toggle
|   ├── demoMap
|   |   ├── DemoMap.tsx                # Componente mapa (integra los componentes)
│   ├── graph/
│   │   ├── GraphControls.tsx          # Controles de zoom
│   │   ├── GraphInstructions.tsx      # Instrucciones de uso
│   │   ├── GraphLegend.tsx            # Leyenda de colores
│   │   └── OrganizationalGraph.tsx    # Componente principal del grafo
│   ├── header/
│   |    └── Header.tsx                # Header Toolbar
│   └── tree/
│       ├── Footer.tsx                 # Footer informativo
│       ├── NodeDetails.tsx            # Detalles expandidos de nodos
│       ├── TreeNode.tsx               # Nodo individual del árbol
│       ├── TreeNodeContainer.tsx      # Contenedor de nodos
│       └── TreeView.tsx               # Vista principal del árbol
├── data/
│   └── mockData.ts                    # Data de ejemplo
├── hooks/
│   ├── useGraphDimensions.ts          # Hook para dimensiones
|   ├── useOrgData.ts                  # Hook para gestión de datos
|   └── useTreeExpansion.ts            # Hook para expansión de árbol
├── types/
│   └── index.ts                       # Definiciones de tipos de datos
└── utils/
    ├── graphUtils.ts                  # Funciones útiles para grafo
    └── nodeStyles.ts                  # Estilos y temas para nodos de árbol
```

## 🏷️ Tipos de Nodos

| Tipo | Icono | Descripción |
|------|-------|-------------|
| `organization` | 🏢 | Empresa o corporación principal |
| `area` | 🏗️ | División o área de negocio |
| `subarea` | 👥 | Subdivisión o departamento |
| `team` | ⚡ | Equipo de trabajo específico |

### Link de previsualización

Visita **https://atlas-org-live-map.netlify.app/** para previsualizar el proyecto

## 📄 Licencia

Distribuido bajo la licencia GNU GENERAL PUBLIC LICENSE v3.

## 👥 Autor

- **Raquel Silloca** - [@rsilloca](https://github.com/rsilloca)