import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Drink some coffee'),
  createTask('Water the plants')
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

// We can create our custom actions, we've changed api of payload
// When this action is dispatched Redux Toolkit will figure out what slice and what reducer to trigger (this way it will go into tasks slice and trigger toggle reducer)
export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
