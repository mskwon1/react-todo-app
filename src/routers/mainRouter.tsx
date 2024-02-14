import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '#pages/IndexPage';
import ZustandTodoPage from '#pages/ZustandTodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/zustand',
    element: <ZustandTodoPage />,
  },
]);

export default router;
