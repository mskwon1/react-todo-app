import { FC } from 'react';
import { TodoItemProps } from './BaseTodoItem';
import { css } from '@emotion/css';

const BaseTodoList = (props: {
  todos: Todo[];
  ItemElement: FC<TodoItemProps>;
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
        return (
          <ItemElement
            key={todo.id}
            todo={todo}
            onClickDelete={() => console.log('delete')}
            onClickEdit={() => console.log('edit')}
            onToggleDone={() => console.log('toggle done')}
          />
        );
      })}
    </div>
  );
};

export default BaseTodoList;
