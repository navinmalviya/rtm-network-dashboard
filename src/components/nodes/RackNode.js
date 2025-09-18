import React from 'react';
import { Handle, Position } from 'reactflow';

export default function RackNode({ data }) {
    const rackHeight = data.size * 10; // scale rack size (U → px)
    const labelHeight = 20; // reserve 20px for the rack label

    return (
        <div
            style={{
                width: 120,
                height: rackHeight + labelHeight,
                border: '2px solid black',
                borderRadius: 4,
                background: '#fff',
                position: 'relative',
            }}>
            {/* Rack Label */}
            <div
                style={{
                    height: labelHeight,
                    background: '#444',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: `${labelHeight}px`,
                    borderBottom: '1px solid #000',
                }}>
                {data.label}
            </div>

            {/* Devices */}
            {data.devices.map(device => (
                <div
                    key={device.id}
                    style={{
                        position: 'absolute',
                        top: labelHeight + device.rackLocation * 10, // add label offset
                        left: 10,
                        width: 100,
                        height: device.height * 10,
                        background: '#e0e0e0',
                        border: '1px solid #000',
                        borderRadius: 2,
                        fontSize: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    {device.label}
                </div>
            ))}

            {/* Optional rack handles */}
            <Handle type='target' position={Position.Left} />
            <Handle type='source' position={Position.Right} />
        </div>
    );
}
