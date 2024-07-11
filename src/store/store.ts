import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import  rootReducer  from './rootReducer'; // Adjust path as needed

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
