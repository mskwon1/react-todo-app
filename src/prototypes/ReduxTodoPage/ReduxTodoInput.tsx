import BaseTodoInput from '#modules/BaseTodoInput';
import { useReduxTodoMutations } from './useReduxTodo';

const ReduxTodoInput = () => {
  const { addTodo } = useReduxTodoMutations();

  return <BaseTodoInput addTodo={addTodo} />;
};

export default ReduxTodoInput;
