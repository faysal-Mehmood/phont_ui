import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
    projects: any; 
}

const initialState: ProjectState = {
  projects: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setAllprojectsReducer(state, action: PayloadAction<any>) {
      state.projects = action.payload;
    },
    addprojectReducer(state, action: PayloadAction<any>) {
      state.projects =[...state.projects, action.payload];
    },
    deleteprojectReducer(state, action: PayloadAction<any>) {
      state.projects =state.projects.filter((item:any)=>item._id!==action.payload);
    },
    // Add other reducers as needed
  },
});

export const { setAllprojectsReducer,addprojectReducer,deleteprojectReducer } = projectSlice.actions;
export default projectSlice.reducer;
