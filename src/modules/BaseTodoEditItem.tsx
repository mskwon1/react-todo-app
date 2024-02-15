import { css } from '@emotion/css';
import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type TodoEditItemProps = {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
};

const BaseTodoEditItem = (props: TodoEditItemProps): JSX.Element => {
  const { todo, updateTodo } = props;

  const [input, setInput] = useState(todo.title);

  const handleInputChange = useCallback(function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value);
  }, []);

  const handleDone = useCallback(
    function hanldeDone() {
      updateTodo({ ...todo, title: input });
    },
    [updateTodo, todo, input]
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    function hanldeKeyDown(e) {
      if (e.key === 'Enter') {
        handleDone();
      }
    },
    [handleDone]
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: 4,
        border: 'solid',
        alignItems: 'center',
      })}
    >
      <input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div
        className={css({
          display: 'flex',
          flexShrink: 0,
          alignItems: 'center',
          gap: 4,
        })}
      >
        <button type="button" onClick={handleDone}>
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default BaseTodoEditItem;
