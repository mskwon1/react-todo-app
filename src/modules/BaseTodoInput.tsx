import { css } from '@emotion/css';
import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';

const BaseTodoInput = (props: {
  input: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onClickAdd: () => void;
}) => {
  const { input, onInputChange, onClickAdd } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    function hanldeKeyDown(e) {
      if (e.key === 'Enter') {
        onClickAdd();
      }
    },
    [onClickAdd]
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
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={onClickAdd}>
        추가
      </button>
    </div>
  );
};

export default BaseTodoInput;
