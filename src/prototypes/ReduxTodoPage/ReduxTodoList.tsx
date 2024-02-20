import BaseTodoList from '#modules/BaseTodoList';
import { memo } from 'react';
import { useAppSelector } from './store';
import { selectTodo } from './store/slices/todoSlice';
import ReduxTodoEditableItem from './ReduxTodoEditableItem';

const ReduxTodoList = () => {
  const todos = useAppSelector(selectTodo);

  return (
    <BaseTodoList todos={todos} ItemElement={memo(ReduxTodoEditableItem)} />
  );
};

export default ReduxTodoList;
