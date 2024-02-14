import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

export const useRecoilTodoValue = () => {
  return useRecoilValue(todoListState);
};

export const useRecoilTodoMutations = () => {
  const setTodos = useSetRecoilState(todoListState);

  const addTodo = useCallback(
    (todo: Todo) => {
      setTodos((prevTodos) => [...prevTodos, todo]);
    },
    [setTodos]
  );

  const removeTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) =>
        prevTodos.filter((prevTodo) => prevTodo.id !== id)
      );
    },
    [setTodos]
  );

  const updateTodo = useCallback(
    (todo: Todo) => {
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => {
          return prevTodo.id === todo.id ? todo : prevTodo;
        })
      );
    },
    [setTodos]
  );

  return {
    addTodo,
    removeTodo,
    updateTodo,
  };
};
