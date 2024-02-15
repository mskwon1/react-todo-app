import { css } from '@emotion/css';
import { useCallback } from 'react';

export type TodoItemProps = {
  todo: Todo;
  onUpdateTodo: (todo: Todo) => void;
  onRemoveTodo: (id: string) => void;
  onClickEdit: () => void;
};

const BaseTodoItem = (props: TodoItemProps): JSX.Element => {
  const { todo, onRemoveTodo, onUpdateTodo, onClickEdit } = props;

  const { id, title, isDone } = todo;

  const handleToggleDone = useCallback(
    function handleToggleDone() {
      onUpdateTodo({ ...todo, isDone: !todo.isDone });
    },
    [onUpdateTodo, todo]
  );

  const handleDelete = useCallback(
    function handleDelete() {
      onRemoveTodo(id);
    },
    [onRemoveTodo, id]
  );

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: 4,
        border: 'solid',
      })}
    >
      <div className={css({ display: 'flex', gap: 4, alignItems: 'center' })}>
        <button
          className={css({ flexShrink: 0 })}
          type="button"
          onClick={handleToggleDone}
        >
          {isDone ? '완료' : '미완료'}
        </button>
        <p>{title}</p>
      </div>
      <div
        className={css({
          display: 'flex',
          flexShrink: 0,
          alignItems: 'center',
          gap: 4,
        })}
      >
        <button type="button" onClick={onClickEdit}>
          수정
        </button>
        <button type="button" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default BaseTodoItem;
