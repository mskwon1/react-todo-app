import { css } from '@emotion/css';
import reactQueryImage from '#assets/react-query.png';
import AsyncReactQueryTodoList from '#prototypes/AsyncReactQueryTodoPage/AsyncReactQueryTodoList';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Component() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <img width={200} height="auto" src={reactQueryImage} />
          <AsyncReactQueryTodoList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

Component.displayName = 'ZustandTodoPage';
