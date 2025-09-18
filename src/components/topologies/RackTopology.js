'use client';

import React from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider, useNodesState, useEdgesState } from 'reactflow';

import 'reactflow/dist/style.css';
import RackNode from '../nodes/RackNode';
import CustomEdge from '../edges/CustomEdge';
import { useSelector } from 'react-redux';

const nodeTypes = {
    rackNode: RackNode,
};

const edgeTypes = {
    custom: CustomEdge,
};

export default function RackTopologyView() {
  const nodeDetails = useSelector(state => {
    return state.mainNode.details ? state.mainNode.details : {};
  });
    const rackNodes = nodeDetails.racksForRackTopology.map((rack, index) => ({
        id: `rack-${index}`,
        type: 'rackNode',
        position: rack.position,
        data: {
            label: rack.label,
            size: rack.size,
            devices: rack.devices,
        },
    }));

    const rackEdges = nodeDetails.racksForRackTopology.flatMap(r => r.edges);

    const [nodes, , onNodesChange] = useNodesState(rackNodes);
    const [edges, , onEdgesChange] = useEdgesState(rackEdges);

    return (
        <div style={{ height: '100vh', background: '#f7f7f7' }}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView>
                    <Background />
                    <Controls />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
}
