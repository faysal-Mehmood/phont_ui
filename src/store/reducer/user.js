import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setContractDetailsReducer(state, action) {
      state.userContract = action.payload;
    },
  },
});

export const { setContractDetailsReducer } = userSlice.actions;
export default userSlice.reducer;
