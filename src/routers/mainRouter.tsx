import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '#pages/IndexPage';
import noopLoader from '#libs/noop-loader';
import DefaultErrorBoundary from '../DefaultErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/zustand',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/ZustandTodoPage'),
  },
  {
    path: '/recoil',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/RecoilTodoPage'),
  },
  {
    path: '/jotai',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/JotaiTodoPage'),
  },
  {
    path: '/context',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/ContextTodoPage'),
  },
  {
    path: '/redux',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/ReduxTodoPage'),
  },
  {
    path: '/async/react-query',
    loader: noopLoader,
    ErrorBoundary: DefaultErrorBoundary,
    lazy: () => import('#pages/AsyncReactQueryTodoPage'),
  },
]);

export default router;
