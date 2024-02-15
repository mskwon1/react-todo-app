import { useCallback, useState } from 'react';
import useZustandTodo from './useZustandTodo';
import BaseTodoItem from '#modules/BaseTodoItem';
import BaseTodoEditItem from '#modules/BaseTodoEditItem';

const ZustandTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const updateTodo = useZustandTodo((actions) => actions.updateTodo);
  const removeTodo = useZustandTodo((actions) => actions.removeTodo);

  if (isEdit) {
    return <BaseTodoEditItem todo={todo} updateTodo={updateTodo} />;
  }

  return (
    <BaseTodoItem
      todo={todo}
      onUpdateTodo={updateTodo}
      onClickEdit={handleEdit}
      onRemoveTodo={removeTodo}
    />
  );
};

export default ZustandTodoEditableItem;
