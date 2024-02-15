import BaseTodoEditItem from '#modules/BaseTodoEditItem';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoEditItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const { updateTodo } = useRecoilTodoMutations();

  return <BaseTodoEditItem todo={todo} updateTodo={updateTodo} />;
};

export default RecoilTodoEditItem;
