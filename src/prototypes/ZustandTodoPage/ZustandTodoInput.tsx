import BaseTodoInput from '#modules/BaseTodoInput';
import useZustandTodo from './useZustandTodo';

const ZustandTodoInput = () => {
  const addTodo = useZustandTodo((state) => state.addTodo);

  return <BaseTodoInput addTodo={addTodo} />;
};

export default ZustandTodoInput;
