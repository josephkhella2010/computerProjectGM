import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoadingType } from "../helps/interfaces";
const initialState: LoadingType = {
  isLoading: true,
};
const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
