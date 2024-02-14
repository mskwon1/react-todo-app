import useZustandTodo from './useZustandTodo';

const ZustandTodoList = () => {
  const todos = useZustandTodo((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>
            {todo.id} - {todo.title}
          </p>
        );
      })}
    </div>
  );
};

export default ZustandTodoList;
