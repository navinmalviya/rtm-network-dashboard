'use client';

import React, { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomEdge from '../edges/CustomEdge';
import MultiPortNode from '../nodes/MultiportNode';
import MainNode from '../nodes/MainNode';

const edgeTypes = {
    custom: CustomEdge,
};

const nodeTypes = {
    multiPort: MultiPortNode,
    mainNode: MainNode,
};

export default function InternalTopology({ internalNodes, internalEdges }) {
    const fallbackNodes = [
        {
            id: 'test1',
            type: 'mainNode',
            data: { status: 'up', label: 'RTM_EXCH' },
            style: { width: '100px', height: '34px' },
            position: { x: -1520, y: 1090 },
        },
        {
            id: 'test2',
            type: 'mainNode',
            data: { status: 'down', label: 'RTM_NOCC' },
            style: { width: '100px', height: '34px' },
            position: { x: -1330, y: 1008 },
        },
    ];

    const fallbackEdges = [
        {
            id: 'test1-test2',
            source: 'test1',
            target: 'test2',
            type: 'custom',
            sourceLabel: 'Gi0/1',
            targetLabel: 'Gi0/2',
            status: 'up',
            sourceIP: '2.2.2.2',
            targetIP: '3.3.3.3',
        },
    ];
    const [nodes, , onNodesChange] = useNodesState(internalNodes || fallbackNodes);
    const [edges, , onEdgesChange] = useEdgesState(internalEdges || fallbackEdges);

    return (
        <div style={{ height: '68vh', width: '100%', backgroundColor: '#F1EFEC' }}>
            <ReactFlowProvider>
                <ReactFlow
                    width={80}
                    height={80}
                    nodes={nodes}
                    edges={edges.map(edge => ({
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
