import BaseTodoEditItem from '#modules/BaseTodoEditItem';
import useZustandTodo from './useZustandTodo';

const ZustandTodoEditItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const updateTodo = useZustandTodo((actions) => actions.updateTodo);

  return <BaseTodoEditItem todo={todo} updateTodo={updateTodo} />;
};

export default ZustandTodoEditItem;
