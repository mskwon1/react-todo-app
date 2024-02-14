import ZustandTodoInput from '#prototypes/ZustandTodoPage/ZustandTodoInput';
import ZustandTodoList from '#prototypes/ZustandTodoPage/ZustandTodoList';
import { css } from '@emotion/css';
import zustandImage from '#assets/zustand.png';

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
        <img width={200} height="auto" src={zustandImage} />
        <ZustandTodoInput />
        <ZustandTodoList />
      </div>
    </div>
  );
}

Component.displayName = 'ZustandTodoPage';
