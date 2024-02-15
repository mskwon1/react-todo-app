import BaseTodoList from '#modules/BaseTodoList';
import { memo } from 'react';
import JotaiTodoEditableItem from './JotaiTodoEditableItem';
import { useJotaiTodoValue } from './useJotaiTodo';

const JotaiTodoList = () => {
  const todos = useJotaiTodoValue();

  return (
    <BaseTodoList todos={todos} ItemElement={memo(JotaiTodoEditableItem)} />
  );
};

export default JotaiTodoList;
