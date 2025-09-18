import React from 'react';
import { BaseEdge, getStraightPath } from 'reactflow';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY, data = {}, markerEnd }) {
    const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });
    const offsetX = (targetX - sourceX) * 0.2;
    const offsetY = (targetY - sourceY) * 0.2;

    const edgeColor =
        data.status === 'up' ? 'green' : data.status === 'down' ? 'red' : data.status === 'warning' ? 'orange' : '#999';

    return (
        <>
            <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={{ stroke: edgeColor, strokeWidth: 2 }} />

            {/* Source Interface Label */}
            {data.sourceLabel && (
                <text x={sourceX + offsetX} y={sourceY + offsetY} fontSize={10} fill='black' textAnchor='start'>
                    {data.sourceLabel}
                    {data.sourceIP && <title>IP: {data.sourceIP}</title>}
                </text>
            )}

            {/* Target Interface Label */}
            {data.targetLabel && (
                <text x={targetX - offsetX} y={targetY - offsetY} fontSize={10} fill='black' textAnchor='end'>
                    {data.targetLabel}
                    {data.targetIP && <title>IP: {data.targetIP}</title>}
                </text>
            )}
        </>
    );
}
