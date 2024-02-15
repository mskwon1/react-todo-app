import { css } from '@emotion/css';
import jotaiImage from '#assets/jotai.png';
import JotaiTodoInput from '#prototypes/JotaiTodoPage/JotaiTodoInput';
import JotaiTodoList from '#prototypes/JotaiTodoPage/JotaiTodoList';

export function Component() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          alignItems: 'center',
          paddingTop: 12,
          paddingLeft: 8,
          paddingRight: 8,
          gap: 8,
          maxWidth: 600,
        })}
      >
        <img width={200} height="auto" src={jotaiImage} />
        <JotaiTodoInput />
        <JotaiTodoList />
      </div>
    </div>
  );
}

Component.displayName = 'JotaiTodoPage';
