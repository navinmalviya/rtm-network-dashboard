import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const mainNodeOperationsSlice = createSlice({
    name: 'mainNode',
    initialState,
    reducers: {
        setMainNodeDetails: (state, action) => {
            const { details } = action.payload;
          
            const { nodeIp, label, status, racks } = details;
          
            const devices = [];
            const edges = [];
            const rackMeta = [];
            const noOfRacks = racks.count || 0;
          
            racks?.forEach((rack, index) => {
              const rackId = `${label}_rack_${index + 1}`;
          
              rackMeta.push({
                id: rackId,
                label: rack.label,
                size: rack.size,
              });
          
              rack.devices.forEach(device => {
                devices.push({
                  ...device,
                  rackId,
                });
              });
          
              rack.edges.forEach(edge => {
                edges.push({
                  ...edge,
                  rackId,
                });
              });
            });
            state.rackviewData = details;
            state.details = {
              nodeIp,
              label,
              status,
              racks: rackMeta,
              devices,
              edges,
              noOfRacks,
            };
        },
    },
});

export const { setMainNodeDetails } = mainNodeOperationsSlice.actions;
export default mainNodeOperationsSlice.reducer;
