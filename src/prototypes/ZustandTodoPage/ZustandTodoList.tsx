import BaseTodoList from '#modules/BaseTodoList';
import { memo } from 'react';
import useZustandTodo from './useZustandTodo';
import ZustandTodoEditableItem from './ZustandTodoEditableItem';

const ZustandTodoList = () => {
  const todos = useZustandTodo((state) => state.todos);

  return (
    <BaseTodoList todos={todos} ItemElement={memo(ZustandTodoEditableItem)} />
  );
};

export default ZustandTodoList;
