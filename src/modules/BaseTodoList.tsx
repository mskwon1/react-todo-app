import { FC } from 'react';
import { css } from '@emotion/css';

const BaseTodoList = (props: {
  todos: Todo[];
  ItemElement: FC<{ todo: Todo }>;
}) => {
  const { todos, ItemElement } = props;

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 4,
      })}
    >
      {todos.map((todo) => {
        return <ItemElement key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default BaseTodoList;
