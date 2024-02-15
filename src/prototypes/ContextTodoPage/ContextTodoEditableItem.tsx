import { useCallback, useState } from 'react';
import BaseTodoItem from '#modules/BaseTodoItem';
import BaseTodoEditItem from '#modules/BaseTodoEditItem';
import { useContextTodoMutations } from './useContextTodo';

const ContextTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useContextTodoMutations();

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

export default ContextTodoEditableItem;
