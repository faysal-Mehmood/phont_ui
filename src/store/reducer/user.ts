import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any; 
  userContract?: any; 
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setContractDetails(state, action: PayloadAction<any>) {
      state.userContract = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setContractDetails } = userSlice.actions;
export default userSlice.reducer;
