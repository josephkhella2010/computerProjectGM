import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoadingType } from "../helps/interfaces";
const initialState: LoadingType = {
  isLoading: false,
};
const IsLoadingSlice = createSlice({
  name: "IsLoadingSlice",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setIsLoading } = IsLoadingSlice.actions;
export default IsLoadingSlice.reducer;
