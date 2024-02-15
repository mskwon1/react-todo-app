import { useCallback } from 'react';
import { atom, useAtomValue, useSetAtom } from 'jotai';

const todoListAtom = atom<Todo[]>([]);

export const useJotaiTodoValue = () => {
  return useAtomValue(todoListAtom);
};

export const useJotaiTodoMutations = () => {
  const setTodos = useSetAtom(todoListAtom);

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
