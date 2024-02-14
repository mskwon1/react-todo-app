import RecoilTodoInput from '#prototypes/RecoilTodoPage/RecoilTodoInput';
import RecoilTodoList from '#prototypes/RecoilTodoPage/RecoilTodoList';
import { css } from '@emotion/css';
import { RecoilRoot } from 'recoil';
import recoilImg from '#assets/recoil.png';

export function Component() {
  return (
    <RecoilRoot>
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
          <img width={200} height="auto" src={recoilImg} />
          <RecoilTodoInput />
          <RecoilTodoList />
        </div>
      </div>
    </RecoilRoot>
  );
}

Component.displayName = 'RecoilTodoPage';
