import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  projects: any;
  activeProject: any;
}

const initialState: ProjectState = {
  projects: null,
  activeProject: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setAllprojectsReducer(state, action: PayloadAction<any>) {
      state.projects = action.payload;
    },
    setActiveProjectReducer(state, action: PayloadAction<any>) {
      state.activeProject = action.payload;
    },
    addprojectReducer(state, action: PayloadAction<any>) {
      state.projects = [...state.projects, action.payload];
    },
    deleteprojectReducer(state, action: PayloadAction<any>) {
      state.projects = state.projects.filter(
        (item: any) => item._id !== action.payload
      );
    },
    updateProjectReducer(state, action: PayloadAction<any>) {
      state.projects = state.projects.map((item: any) => {
        if (item?._id === action.payload?._id) {
          action.payload;
        } else {
          return item;
        }
      });
    },
    // Add other reducers as needed
  },
});

export const {
  setAllprojectsReducer,
  addprojectReducer,
  deleteprojectReducer,
  updateProjectReducer,
  setActiveProjectReducer,
} = projectSlice.actions;
export default projectSlice.reducer;
