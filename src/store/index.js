import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tabSlice from './slices/tabs-slice';
import ModalReducer from './slices/modal-slice';
import mainNodeOperations from './slices/main-node-operations';

const rootReducer = combineReducers({
    tabs: tabSlice,
    modals: ModalReducer,
    mainNode: mainNodeOperations,
});

export const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
