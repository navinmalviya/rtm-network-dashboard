'use client';

import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '@/store/slices/modal-slice';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '14px',
        minWidth: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        borderRadius: '8px',
        backgroundColor: '#fff',
        width: '80%',
        height: '80vh',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1000,
    },
};

// Important for accessibility
if (typeof window !== 'undefined') {
    Modal.setAppElement('#rtm-dashboard-root');
}

export default function RtmModal({ children, modalName, onCancel }) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modals[modalName]);

    return (
        <Modal
            isOpen={isOpen || false}
            onRequestClose={() => {
                dispatch(closeModal({ modalName }));
                if (onCancel) {
                    onCancel();
                }
            }}
            style={customStyles}>
            {children}
        </Modal>
    );
}
