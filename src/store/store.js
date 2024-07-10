import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import rootReducer from "./rootReducer";

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Extract the dispatch function from the store for convenience
const { dispatch } = store;

// Create a custom useDispatch hook
const useDispatch = () => useAppDispatch();

// Export the Redux store, dispatch, useSelector, and useDispatch for use in components
export { store, dispatch, useAppSelector as useSelector, useDispatch };
