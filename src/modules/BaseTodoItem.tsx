import { css } from '@emotion/css';

export type TodoItemProps = {
  todo: Todo;
  onToggleDone: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

const BaseTodoItem = (props: TodoItemProps): JSX.Element => {
  const {
    todo: { title, isDone },
    onClickDelete,
    onToggleDone,
    onClickEdit,
  } = props;

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
          onClick={onToggleDone}
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
        <button type="button" onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default BaseTodoItem;
