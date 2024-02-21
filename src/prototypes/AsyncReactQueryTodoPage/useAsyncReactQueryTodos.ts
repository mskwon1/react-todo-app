import { useQuery } from '@tanstack/react-query';

const useAsyncReactQueryTodos = (): { todos: Todo[]; isLoading: boolean } => {
  const { data: todos, isLoading } = useQuery({
    queryKey: ['TODOS'],
    queryFn: async () => {
      const result = await fetch('/api/todos');

      return result.json();
    },
  });

  return {
    todos,
    isLoading,
  };
};

export default useAsyncReactQueryTodos;
