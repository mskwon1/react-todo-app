import { sm } from '#libs/breakpoints';
import ZustandTodoInput from '#prototypes/ZustandTodoPage/ZustandTodoInput';
import ZustandTodoList from '#prototypes/ZustandTodoPage/ZustandTodoList';
import { css } from '@emotion/css';

export default function ZustandTodoPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 8,
        paddingRight: 8,
        gap: 8,
        [sm]: {
          paddingRight: 100,
          paddingLeft: 100,
        },
      })}
    >
      <ZustandTodoInput />
      <ZustandTodoList />
    </div>
  );
}
