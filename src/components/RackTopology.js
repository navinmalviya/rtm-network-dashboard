'use client';

import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import 'reactflow/dist/style.css';
import RackNode from './RackNode';
import CustomEdge from './CustomEdge';

const nodeTypes = {
  rackNode: RackNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const sampleData = {
  nodeIp: '1.1.1.1',
  status: 'down',
  label: 'RTM_EXCH',
  racks: [
    {
      label: 'Rack A',
      size: 42,
      devices: [
        {
          id: 'devA1',
          label: 'Firewall',
          nodeIp: '10.0.0.1',
          rackLocation: 1,
          height: 2,
          status: 'up',
        },
        {
          id: 'devA2',
          label: 'Switch A',
          nodeIp: '10.0.0.2',
          rackLocation: 4,
          height: 1,
          status: 'up',
        },
      ],
      edges: [
        {
          id: 'devA1-devA2',
          source: 'devA1',
          target: 'devA2',
          type: 'custom',
          sourceLabel: 'Gi0/1',
          targetLabel: 'Gi0/2',
          sourceIP: '192.168.1.1',
          targetIP: '192.168.1.2',
          status: 'up',
        },
      ],
      position: { x: 0, y: 0 },
    },
    {
      label: 'Rack B',
      size: 9,
      devices: [
        {
          id: 'devB1',
          label: 'Router B',
          nodeIp: '10.0.0.3',
          rackLocation: 1,
          height: 2,
          status: 'down',
        },
      ],
      edges: [],
      position: { x: 300, y: 0 },
    },
  ],
};

export default function RackTopologyView() {
  const rackNodes = sampleData.racks.map((rack, index) => ({
    id: `rack-${index}`,
    type: 'rackNode',
    position: rack.position,
    data: {
      label: rack.label,
      size: rack.size,
      devices: rack.devices,
    },
  }));

  const rackEdges = sampleData.racks.flatMap(r => r.edges);

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
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}