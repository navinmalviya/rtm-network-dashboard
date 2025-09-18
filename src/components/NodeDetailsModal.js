'use client';

import React from 'react';
import Modal from 'react-modal';
import InternalTopology from './InternalTopology';
import RTMDashboardTabs from '@/common/components/tabs';
import { useSearchParams } from 'next/navigation';
import { RtmModal } from '@/common/components';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/store/slices/modal-slice';
import { useSelector } from 'react-redux';
import MultiRackTopology from './RackTopology';
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         padding: '14px',
//         minWidth: '600px',
//         maxWidth: '90vw',
//         maxHeight: '90vh',
//         overflow: 'auto',
//         borderRadius: '8px',
//         backgroundColor: '#fff',
//         width: '80%',
//         height: '80vh',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//         zIndex: 1000,
//     },
// };

// // Important for accessibility
// if (typeof window !== 'undefined') {
//     Modal.setAppElement('#rtm-dashboard-root');
// }

const adminScheduleTabs = [
    { label: 'overview', step: 'overview' },
    { label: 'Rackview', step: 'rackview' },
];

export default function NodeDetailsModal({ isOpen, onClose, data = {} }) {
    const searchParams = useSearchParams();
    const nodeDetails = useSelector(state => {
        return state.mainNode.details ? state.mainNode.details : {};
    });

    console.log('de', nodeDetails);
    const dispatch = useDispatch();
    const currentStep = searchParams.get('step');
    return (
        <RtmModal modalName='nodeDetailsModal'>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <h2>{nodeDetails.label || 'Node'} - Internal Topology</h2>
                <button
                    onClick={() => dispatch(closeModal({ modalName: 'nodeDetailsModal' }))}
                    style={{
                        padding: '6px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        background: '#1976d2',
                        color: '#fff',
                        cursor: 'pointer',
                        height: '26px',
                    }}>
                    Close
                </button>
            </div>
            <RTMDashboardTabs tabs={adminScheduleTabs} currentStep={currentStep} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <p>
                    <strong>Status:</strong> {nodeDetails.status || 'unknown'}
                </p>
                <p>
                    <strong>Devices:</strong> {nodeDetails.devices?.length || 0}
                </p>
                <p>
                    <strong>Circuits:</strong> {nodeDetails.circuits?.length || 0}
                </p>
            </div>
            <div>
                {currentStep === 'overview' && (
                    <InternalTopology
                        internalNodes={nodeDetails.devices || []}
                        internalEdges={nodeDetails.edges || []}
                    />
                )}
                {currentStep === 'rackview' && <MultiRackTopology />}
            </div>
        </RtmModal>
    );
}
