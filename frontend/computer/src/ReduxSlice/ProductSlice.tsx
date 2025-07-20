import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { productsType } from "../helps/interfaces";

interface initialStateType {
  computerData: productsType[];
}
const initialState: initialStateType = {
  computerData: [],
};

const ReduxSlice = createSlice({
  name: "ReduxSlice",
  initialState,
  reducers: {
    setComputerData: (state, action: PayloadAction<productsType[]>) => {
      state.computerData = action.payload;
    },
  },
});
export const { setComputerData } = ReduxSlice.actions;
export default ReduxSlice.reducer;
