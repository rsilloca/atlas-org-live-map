import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { OrgNode } from '../../types';
import { transformToGraphData } from '../../utils/graphUtils';
import { GraphControls } from './GraphControls';
import { GraphLegend } from './GraphLegend';
import { GraphInstructions } from './GraphInstructions';

export const OrganizationalGraph: React.FC<{
    data: OrgNode[];
    width: number;
    height: number;
}> = ({ data, width, height }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    useEffect(() => {
        if (!svgRef.current || !data.length) return;

        // Limpiamos grafo
        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current);
        const { nodes, links } = transformToGraphData(data);

        // Establecemos zoom
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.3, 3])
            .on("zoom", (event) => {
                container.attr("transform", event.transform);
            });

        zoomRef.current = zoom;
        svg.call(zoom);

        // Agregamos el contenedor
        const container = svg.append("g");

        // Definimos simulación
        const simulation = d3.forceSimulation(nodes as any)
            .force("link", d3.forceLink(links).id((d: any) => d.id).distance(80))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius((d: any) => Math.sqrt(d.members) * 3 + 20));

        // Función de colores por país
        const colorScale = d3.scaleOrdinal<string>()
            .domain(['España', 'México', 'Colombia'])
            .range(['#3B82F6', '#10B981', '#F59E0B']);

        // Función para calcular tamaño de acuerdo a cantidad de miembros
        const sizeScale = d3.scaleLinear()
            .domain([0, d3.max(nodes, d => d.members) || 100])
            .range([15, 40]);

        // Pintamos aristas
        const link = container.append("g")
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke", "#94A3B8")
            .attr("stroke-width", 2)
            .attr("stroke-opacity", 0.6);

        // Agregamos nodos agrupados
        const nodeGroup = container.append("g")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .style("cursor", "pointer")
            .call(d3.drag<any, any>()
                .on("start", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }));

        // Pintamos los nodos
        const circles = nodeGroup.append("circle")
            .attr("r", d => sizeScale(d.members)) // Radio / tamaño
            .attr("fill", d => colorScale(d.country)) // Color por país
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 3)
            .attr("opacity", 0.9);

        // Agregamos íconos como texto a los nodos
        nodeGroup.append("text")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .attr("font-size", d => sizeScale(d.members) * 0.6)
            .attr("font-family", "Arial, sans-serif")
            .text(d => {
                switch (d.type) {
                    case 'organization': return '🏢';
                    case 'area': return '🏗️';
                    case 'subarea': return '👥';
                    case 'team': return '⚡';
                    default: return '🏢';
                }
            });

        // Agregamos label nombre nodo
        nodeGroup.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", d => sizeScale(d.members) + 20)
            .attr("fill", "#374151")
            .attr("font-size", "12px")
            .attr("font-weight", "600")
            .style("pointer-events", "none")
            .text(d => d.name.length > 20 ? d.name.substring(0, 20) + "..." : d.name);

        // Agregamos label cantidad miembros
        nodeGroup.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", d => sizeScale(d.members) + 35)
            .attr("fill", "#6B7280")
            .attr("font-size", "10px")
            .style("pointer-events", "none")
            .text(d => `${d.members} miembros`);

        // Hover
        nodeGroup
            .on("mouseenter", function (event, d) {
                d3.select(this).select("circle")
                    .transition()
                    .duration(200)
                    .attr("stroke-width", 5)
                    .attr("opacity", 1);

                // Mostrar tooltip
                const tooltip = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("position", "absolute")
                    .style("background", "rgba(0,0,0,0.8)")
                    .style("color", "white")
                    .style("padding", "10px")
                    .style("border-radius", "5px")
                    .style("font-size", "12px")
                    .style("pointer-events", "none")
                    .style("opacity", 0)
                    .html(`
            <strong>${d.name}</strong><br/>
            Tipo: ${d.type}<br/>
            Miembros: ${d.members}<br/>
            País: ${d.country}
          `);

                tooltip.transition().duration(200).style("opacity", 1);

                d3.select("body").on("mousemove", function (event) {
                    tooltip
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 10) + "px");
                });
            })
            .on("mouseleave", function () {
                d3.select(this).select("circle")
                    .transition()
                    .duration(200)
                    .attr("stroke-width", 3)
                    .attr("opacity", 0.9);

                // Ocultar tooltip
                d3.selectAll(".tooltip").remove();
            })
            .on("click", function (event, d) {
                setSelectedNode(selectedNode === d.id ? null : d.id);

                circles.attr("opacity", selectedNode === d.id ? 0.9 : 0.3);
                link.attr("stroke-opacity", selectedNode === d.id ? 0.6 : 0.2);

                if (selectedNode !== d.id) {
                    d3.select(this).select("circle").attr("opacity", 1);

                    link.attr("stroke-opacity", (l: any) =>
                        l.source.id === d.id || l.target.id === d.id ? 0.8 : 0.2
                    );

                    circles.attr("opacity", (n: any) => {
                        const isConnected = links.some((l: any) =>
                            (l.source.id === d.id && l.target.id === n.id) ||
                            (l.target.id === d.id && l.source.id === n.id)
                        );
                        return n.id === d.id || isConnected ? 1 : 0.3;
                    });
                }
            });

        simulation.on("tick", () => {
            link
                .attr("x1", (d: any) => d.source.x)
                .attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x)
                .attr("y2", (d: any) => d.target.y);

            nodeGroup.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
        });

        // Limpiar
        return () => {
            simulation.stop();
            d3.selectAll(".tooltip").remove();
        };
    }, [data, width, height, selectedNode]);

    const handleZoomIn = () => {
        if (!svgRef.current || !zoomRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(300)
            .call(
                zoomRef.current.scaleBy,
                1.5 // Factor de zoom in
            );
    };

    const handleZoomOut = () => {
        if (!svgRef.current || !zoomRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(300)
            .call(
                zoomRef.current.scaleBy,
                0.67 // Factor de zoom out (1/1.5 ≈ 0.67)
            );
    };

    const handleReset = () => {
        if (!svgRef.current || !zoomRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(750)
            .call(
                zoomRef.current.transform,
                d3.zoomIdentity
            );

        setSelectedNode(null);
    };

    return (
        <div className="relative w-full h-full bg-slate-50 rounded-xl overflow-hidden border border-gray-200">
            <svg
                ref={svgRef}
                width={width}
                height={height}
                className="w-full h-full"
            />

            {/* Controles */}
            <GraphControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} onReset={handleReset} />

            {/* Leyenda */}
            <GraphLegend />

            {/* Instrucciones */}
            <GraphInstructions />
        </div>
    );
};