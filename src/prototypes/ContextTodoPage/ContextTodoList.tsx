import BaseTodoList from '#modules/BaseTodoList';
import { memo } from 'react';
import ContextTodoEditableItem from './ContextTodoEditableItem';
import { useContextTodo } from './useContextTodo';

const ContextTodoList = () => {
  const todos = useContextTodo();

  if (!todos) {
    throw new Error('TodoContext Provider not found');
  }

  return (
    <BaseTodoList todos={todos} ItemElement={memo(ContextTodoEditableItem)} />
  );
};

export default ContextTodoList;
