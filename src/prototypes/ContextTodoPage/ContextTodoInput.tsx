import BaseTodoInput from '#modules/BaseTodoInput';
import { useContextTodoMutations } from './useContextTodo';

const ContextTodoInput = () => {
  const { addTodo } = useContextTodoMutations();

  return <BaseTodoInput addTodo={addTodo} />;
};

export default ContextTodoInput;
