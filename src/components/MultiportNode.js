import React from 'react';
import { Handle, Position } from 'reactflow';

export default function MultiPortNode({ data }) {
    return (
        <div
            style={{
                width: 110,
                height: 40,
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                borderRadius: 6,
                textAlign: 'center',
                lineHeight: '40px',
                position: 'relative',
            }}>
            {data.label}

            {/* Top Handle */}
            <Handle type='target' position={Position.Top} style={{ background: '#555' }} id='top' />

            {/* Bottom Handle */}
            <Handle type='source' position={Position.Bottom} style={{ background: '#555' }} id='bottom' />

            {/* Left Handle */}
            <Handle type='target' position={Position.Left} style={{ background: '#555' }} id='left' />

            {/* Right Handle */}
            <Handle type='source' position={Position.Right} style={{ background: '#555' }} id='right' />
        </div>
    );
}
