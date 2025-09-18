'use client';

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Icon } from '@/common/icons';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/slices/modal-slice';
import { setMainNodeDetails } from '@/store/slices/main-node-operations';

export default function MainNode({ data }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [hovered, setHovered] = useState(false);

    const statusColor = status => (status === 'up' ? 'green' : status === 'down' ? 'red' : 'orange');
    return (
        <>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onDoubleClick={() => {
                    dispatch(openModal({ modalName: 'nodeDetailsModal' }));
                    dispatch(setMainNodeDetails({ details: data }));
                    router.push('?step=overview');
                }}
                style={{
                    width: 100,
                    height: 34,
                    background: 'white',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    border: '1px solid black',
                    fontSize: 12,
                    borderRadius: '3px',
                    position: 'relative',
                    cursor: 'pointer',
                }}>
                <div
                    style={{
                        width: 4,
                        height: '100%',
                        backgroundColor: statusColor(data.status),
                        borderTopLeftRadius: '2px',
                        borderBottomLeftRadius: '2px',
                    }}
                />

                <div style={{ flex: 1, textAlign: 'center' }}>{data.label}</div>

                {hovered && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '105%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#fefefe',
                            color: '#000',
                            border: '1px solid #ccc',
                            borderRadius: 4,
                            padding: '6px 10px',
                            width: 180,
                            zIndex: 1,
                            boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
                            fontSize: 11,
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <h3>Node IP: {data.nodeIp}</h3>
                        <strong>
                            <Icon width={8} height={8} name='eye' styles={{ fill: '#CCC' }} /> Devices:{' '}
                            {data.devices?.length || 0}
                        </strong>
                        <strong>
                            <Icon width={8} height={8} name='eye' styles={{ fill: '#CCC' }} /> Circuits:{' '}
                            {data.circuits?.length || 0}
                        </strong>
                    </div>
                )}

                <Handle type='target' position={Position.Top} style={{ background: '#555' }} id='top' />
                <Handle type='source' position={Position.Bottom} style={{ background: '#555' }} id='bottom' />
            </div>

            {/* <NodeDetailsModal data={data} /> */}
        </>
    );
}
