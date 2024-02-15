import BaseTodoInput from '#modules/BaseTodoInput';
import { useJotaiTodoMutations } from './useJotaiTodo';

const JotaiTodoInput = () => {
  const { addTodo } = useJotaiTodoMutations();

  return <BaseTodoInput addTodo={addTodo} />;
};

export default JotaiTodoInput;
