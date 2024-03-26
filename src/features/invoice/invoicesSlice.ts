import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InvoicesState {
  status: string[];
}

const initialState: InvoicesState = {
  status: [],
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string[]>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = invoicesSlice.actions;

export default invoicesSlice.reducer;
