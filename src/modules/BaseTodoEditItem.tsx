import { css } from '@emotion/css';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  forwardRef,
  useCallback,
} from 'react';

const BaseTodoEditItem = forwardRef<
  HTMLInputElement,
  {
    input: string;
    onChangeInput: ChangeEventHandler<HTMLInputElement>;
    onClickDone: () => void;
  }
>((props, ref): JSX.Element => {
  const { input, onChangeInput, onClickDone } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    function hanldeKeyDown(e) {
      if (e.key === 'Enter') {
        onClickDone();
      }
    },
    [onClickDone]
  );

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
        value={input}
        onChange={onChangeInput}
        ref={ref}
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
        <button type="button" onClick={onClickDone}>
          수정 완료
        </button>
      </div>
    </div>
  );
});

export default BaseTodoEditItem;
