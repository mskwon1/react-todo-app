import { create } from 'zustand';

const useZustandTodo = create<{
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (todo) =>
    set((state) => {
      return {
        todos: state.todos.map((prevTodo) => {
          return prevTodo.id === todo.id ? todo : prevTodo;
        }),
      };
    }),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useZustandTodo;
