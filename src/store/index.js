import { configureStore } from '@reduxjs/toolkit';
import { humansSlice } from './humansSlice';
import { taskSlice } from './taskSlice';
import { charactersSlice } from './charactersSlice';

// Configure store applies 3 middlewares in development for us
// one of those middlewares wires in
export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humansSlice.reducer,
    characters: charactersSlice.reducer
  }
});
