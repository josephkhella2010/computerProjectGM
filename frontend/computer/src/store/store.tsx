import { configureStore } from "@reduxjs/toolkit";
import ReduxSliceReducer from "../ReduxSlice/ProductSlice";
import loadingSliceReducer from "../ReduxSlice/LoadingSlice";
import IsLoadingSliceReducer from "../ReduxSlice/IsLoadingSlice";
import SendingReducer from "../ReduxSlice/SendingReducer";
// Create Store
const store = configureStore({
  reducer: {
    computerData: ReduxSliceReducer,
    isLoadingReducer: loadingSliceReducer,
    IsLoadingSlice: IsLoadingSliceReducer,
    SendingSlice: SendingReducer,
  },
});

// Run Saga
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
