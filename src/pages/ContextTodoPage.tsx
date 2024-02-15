import { css } from '@emotion/css';
import contextImage from '#assets/react-context.png';
import ContextTodoProvider from '#prototypes/ContextTodoPage/ContextTodoProvider';
import ContextTodoInput from '#prototypes/ContextTodoPage/ContextTodoInput';
import ContextTodoList from '#prototypes/ContextTodoPage/ContextTodoList';

export function Component() {
  return (
    <ContextTodoProvider>
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
          <img width={200} height="auto" src={contextImage} />
          <ContextTodoInput />
          <ContextTodoList />
        </div>
      </div>
    </ContextTodoProvider>
  );
}

Component.displayName = 'ZustandTodoPage';
