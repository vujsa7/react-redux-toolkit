import { createSlice, nanoid } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Skylar'),
  createHuman('Gomez'),
  createHuman('Hank'),
  createHuman('Walt Junior')
];

export const humansSlice = createSlice({
  name: 'humans',
  initialState: initialState,
  // This is like combineReducers, it's built on top of it
  // it takes in key and value is a reducer function
  reducers: {
    add: (state, action) => {
      let human = createHuman(action.payload);
      state.push(human);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(taskSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
});
