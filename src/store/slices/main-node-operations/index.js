import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const mainNodeOperationsSlice = createSlice({
    name: 'mainNode',
    initialState,
    reducers: {
        setMainNodeDetails: (state, action) => {
            const { details } = action.payload;

            const { nodeIp, label, status, racks = [], edges = [] } = details;

            const devices = [];
            const rackMeta = [];

            racks.forEach((rack, index) => {
                const rackId = `${label}_rack_${index + 1}`;

                rackMeta.push({
                    ...rack,
                    id: rackId,
                    label: rack.label,
                    size: rack.size,
                });

                rack.devices.forEach(device => {
                    devices.push({
                        ...device,
                        rackId, // keep track of parent rack
                    });
                });
            });

            state.rackviewData = details;
            state.details = {
                nodeIp,
                label,
                status,
                racks: rackMeta, // summary view of racks
                devices, // flat list of devices
                edges, // unified edges array (cross + intra-rack)
                noOfRacks: racks.length,
            };
        },
    },
});

export const { setMainNodeDetails } = mainNodeOperationsSlice.actions;
export default mainNodeOperationsSlice.reducer;
