// components/RackNode.js
'use client';

import React from 'react';
import { Handle, Position } from 'reactflow';

export default function RackNode({ data }) {
  const { label, size, devices = [] } = data;
  const rackHeight = size * 10; // Each U = 10px

  return (
    <div
      style={{
        width: 160,
        height: rackHeight,
        border: '2px solid black',
        borderRadius: 4,
        backgroundColor: '#fff',
        position: 'relative',
        fontSize: 10,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '2px 4px',
          fontWeight: 'bold',
        }}
      >
        {label} ({size}U)
      </div>
      {devices.map((device) => {
        const top = (device.rackLocation - 1) * 10; // rackLocation in U
        const height = device.height * 10;
        return (
          <div
            key={device.id}
            style={{
              position: 'absolute',
              top,
              left: 8,
              width: 140,
              height,
              backgroundColor: '#e0e0e0',
              border: '1px solid #888',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              overflow: 'hidden',
            }}
          >
            {device.data.label}
          </div>
        );
      })}
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
  );
}
