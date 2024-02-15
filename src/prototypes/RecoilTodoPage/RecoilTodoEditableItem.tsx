import { useCallback, useState } from 'react';
import { useRecoilTodoMutations } from './useRecoilTodo';
import BaseTodoItem from '#modules/BaseTodoItem';
import BaseTodoEditItem from '#modules/BaseTodoEditItem';

const RecoilTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useRecoilTodoMutations();

  if (isEdit) {
    return <BaseTodoEditItem todo={todo} updateTodo={updateTodo} />;
  }

  return (
    <BaseTodoItem
      todo={todo}
      onClickEdit={handleClickEdit}
      onUpdateTodo={updateTodo}
      onRemoveTodo={removeTodo}
    />
  );
};

export default RecoilTodoEditableItem;
