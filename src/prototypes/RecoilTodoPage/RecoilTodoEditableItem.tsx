import { useCallback, useState } from 'react';
import BaseTodoItem from '#modules/BaseTodoItem';
import RecoilTodoEditItem from './RecoilTodoEditItem';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const { id } = todo;

  const [isEdit, setIsEdit] = useState(false);

  const { updateTodo, removeTodo } = useRecoilTodoMutations();

  const handleToggleDone = useCallback(
    function handleToggleDone() {
      updateTodo({ ...todo, isDone: !todo.isDone });
    },
    [updateTodo, todo]
  );

  const handleDelete = useCallback(
    function handleDelete() {
      removeTodo(id);
    },
    [removeTodo, id]
  );

  const handleEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  if (isEdit) {
    return <RecoilTodoEditItem todo={todo} />;
  }

  return (
    <BaseTodoItem
      todo={todo}
      onToggleDone={handleToggleDone}
      onClickEdit={handleEdit}
      onClickDelete={handleDelete}
    />
  );
};

export default RecoilTodoEditableItem;
