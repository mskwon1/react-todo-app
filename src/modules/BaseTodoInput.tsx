import { css } from '@emotion/css';
import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useState,
} from 'react';
import { v4 } from 'uuid';

const BaseTodoInput = (props: { addTodo: (todo: Todo) => void }) => {
  const { addTodo } = props;

  const [input, setInput] = useState('');

  const handleInputChange = useCallback(function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value);
  }, []);

  const handleAddTodo = useCallback(
    function handleAddTodo() {
      addTodo({ id: v4(), title: input, isDone: false });

      // reset input
      setInput('');
    },
    [addTodo, input]
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    function hanldeKeyDown(e) {
      if (e.key === 'Enter') {
        handleAddTodo();
      }
    },
    [handleAddTodo]
  );

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 4,
      })}
    >
      <input
        className={css({ flexGrow: 1 })}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTodo}>
        추가
      </button>
    </div>
  );
};

export default BaseTodoInput;
