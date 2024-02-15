import BaseTodoInput from '#modules/BaseTodoInput';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoInput = () => {
  const { addTodo } = useRecoilTodoMutations();

  return <BaseTodoInput addTodo={addTodo} />;
};

export default RecoilTodoInput;
