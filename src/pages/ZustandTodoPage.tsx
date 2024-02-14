import ZustandTodoInput from '#prototypes/ZustandTodoPage/ZustandTodoInput';
import ZustandTodoList from '#prototypes/ZustandTodoPage/ZustandTodoList';
import { css } from '@emotion/css';

export default function ZustandTodoPage() {
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
        <ZustandTodoInput />
        <ZustandTodoList />
      </div>
    </div>
  );
}
