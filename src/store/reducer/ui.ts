import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  uiState: string | null;
  editData: any;
  openForm: boolean;
}

const initialState: UiState = {
  uiState: "",
  editData: null,
  openForm: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveUiState(state, action: PayloadAction<any>) {
      state.uiState = action.payload.uiState;
      state.editData = action.payload.data;
    },
    setOpenFormReducer(state, action: PayloadAction<any>) {
      state.openForm = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setActiveUiState, setOpenFormReducer } = uiSlice.actions;
export default uiSlice.reducer;
