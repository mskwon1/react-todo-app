import { useCallback, useState } from 'react';
import useZustandTodo from './useZustandTodo';
import BaseTodoItem from '#modules/BaseTodoItem';
import ZustandTodoEditItem from './ZustandTodoEditItem';

const ZustandTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const removeTodo = useZustandTodo((actions) => actions.removeTodo);
  const updateTodo = useZustandTodo((actions) => actions.updateTodo);

  if (isEdit) {
    return <ZustandTodoEditItem todo={todo} />;
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
