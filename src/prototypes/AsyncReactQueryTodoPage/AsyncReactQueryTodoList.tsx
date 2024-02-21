import useAsyncReactQueryTodos from './useAsyncReactQueryTodos';

const AsyncReactQueryTodoList = () => {
  const { todos, isLoading } = useAsyncReactQueryTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map(({ id, isDone, title }) => {
        return (
          <li key={id}>
            [{isDone ? '완료' : '미완료'}] {title}
          </li>
        );
      })}
    </ul>
  );
};

export default AsyncReactQueryTodoList;
