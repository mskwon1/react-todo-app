import { useCallback, useState } from 'react';
import { useJotaiTodoMutations } from './useJotaiTodo';
import BaseTodoItem from '#modules/BaseTodoItem';
import BaseTodoEditItem from '#modules/BaseTodoEditItem';

const JotaiTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useJotaiTodoMutations();

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

export default JotaiTodoEditableItem;
