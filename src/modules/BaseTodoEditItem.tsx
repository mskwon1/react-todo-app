import { css } from '@emotion/css';
import { ChangeEventHandler } from 'react';

const BaseTodoEditItem = (props: {
  input: string;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
  onClickDone: () => void;
}): JSX.Element => {
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
      <input value={input} onChange={onChangeInput} />
      <div
        className={css({
          display: 'flex',
          flexShrink: 0,
          alignItems: 'center',
          gap: 4,
        })}
      >
        <button type="button" onClick={onClickDone}>
          완료
        </button>
      </div>
    </div>
  );
};

export default BaseTodoEditItem;
