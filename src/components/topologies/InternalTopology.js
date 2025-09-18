'use client';

import React from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomEdge from '../edges/CustomEdge';
import MultiPortNode from '../nodes/MultiportNode';
import MainNode from '../nodes/MainNode';

const edgeTypes = { custom: CustomEdge };
const nodeTypes = { multiPort: MultiPortNode, mainNode: MainNode };

export default function InternalTopology({ racks, edges = [] }) {
    const spacingX = 300; // column gap between racks
    const spacingY = 100; // vertical gap between devices

    const allNodes = racks.flatMap((rack, rackIndex) =>
        rack.devices.map((dev, devIndex) => ({
            id: dev.id,
            type: 'mainNode',
            data: { status: dev.status, label: dev.label, nodeIp: dev.nodeIp },
            style: { width: '120px', height: '40px' },
            position: {
                x: rackIndex * spacingX,
                y: devIndex * spacingY,
            },
        })),
    );

    const [nodes, , onNodesChange] = useNodesState(allNodes);
    const [allEdges, , onEdgesChange] = useEdgesState(edges);

    return (
        <div style={{ height: '68vh', width: '100%', backgroundColor: '#F1EFEC' }}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={allEdges.map(edge => ({
                        ...edge,
                        data: {
                            sourceLabel: edge.sourceLabel,
                            targetLabel: edge.targetLabel,
                            status: edge.status,
                            sourceIP: edge.sourceIP,
                            targetIP: edge.targetIP,
                        },
                    }))}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    edgeTypes={edgeTypes}
                    nodeTypes={nodeTypes}
                    fitView>
                    <Background />
                    <MiniMap />
                    <Controls />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
}
