import { css } from '@emotion/css';
import reduxImage from '#assets/redux.png';
import { Provider } from 'react-redux';
import store from '#prototypes/ReduxTodoPage/store';
import ReduxTodoInput from '#prototypes/ReduxTodoPage/ReduxTodoInput';
import ReduxTodoList from '#prototypes/ReduxTodoPage/ReduxTodoList';

export function Component() {
  return (
    <Provider store={store}>
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
          <img width={200} height="auto" src={reduxImage} />
          <ReduxTodoInput />
          <ReduxTodoList />
        </div>
      </div>
    </Provider>
  );
}

Component.displayName = 'ZustandTodoPage';
