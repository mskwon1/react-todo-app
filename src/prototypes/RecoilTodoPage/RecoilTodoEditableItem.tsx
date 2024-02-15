import { useCallback, useState } from 'react';
import BaseTodoItem from '#modules/BaseTodoItem';
import RecoilTodoEditItem from './RecoilTodoEditItem';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useRecoilTodoMutations();

  if (isEdit) {
    return <RecoilTodoEditItem todo={todo} />;
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
