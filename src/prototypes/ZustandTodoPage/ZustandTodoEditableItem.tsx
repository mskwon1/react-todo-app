import { useCallback, useState } from 'react';
import useZustandTodo from './useZustandTodo';
import BaseTodoItem from '#modules/BaseTodoItem';
import ZustandTodoEditItem from './ZustandTodoEditItem';

const ZustandTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const { id } = todo;

  const [isEdit, setIsEdit] = useState(false);

  const removeTodo = useZustandTodo((actions) => actions.removeTodo);
  const updateTodo = useZustandTodo((actions) => actions.updateTodo);

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
    return <ZustandTodoEditItem todo={todo} />;
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

export default ZustandTodoEditableItem;
