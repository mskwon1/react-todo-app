import { css } from '@emotion/css';
import { ChangeEventHandler, forwardRef } from 'react';

const BaseTodoEditItem = forwardRef<
  HTMLInputElement,
  {
    input: string;
    onChangeInput: ChangeEventHandler<HTMLInputElement>;
    onClickDone: () => void;
  }
>((props, ref): JSX.Element => {
  const { input, onChangeInput, onClickDone } = props;

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
      <input value={input} onChange={onChangeInput} ref={ref} />
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
