'use client';

import React, { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import { divisionEdges, divisionNodes } from '@/data';
import CustomEdge from '../edges/CustomEdge';
import MultiPortNode from '../nodes/MultiportNode';
import MainNode from '../nodes/MainNode';
import NodeDetailsModal from '../modals/NodeDetailsModal';
import { closeModal } from '@/store/slices/modal-slice';

const edgeTypes = {
    custom: CustomEdge,
};

const nodeTypes = {
    multiPort: MultiPortNode,
    mainNode: MainNode,
};

export default function MPLSTopology() {
    const [nodes, , onNodesChange] = useNodesState(divisionNodes);
    const [edges, , onEdgesChange] = useEdgesState(divisionEdges);

    return (
        <div style={{ height: '98vh', width: '100%', backgroundColor: '#f0f0f0' }}>
            <ReactFlowProvider>
                <ReactFlow
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
            <NodeDetailsModal />
        </div>
    );
}
