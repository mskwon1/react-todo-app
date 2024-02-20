import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type TodoState = Todo[];

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
    update: (state, action: PayloadAction<Todo>) => {
      return state.map((prevTodo) =>
        prevTodo.id === action.payload.id ? action.payload : prevTodo
      );
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((prevTodo) => prevTodo.id !== action.payload);
    },
  },
});

export const { add, update, remove } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
