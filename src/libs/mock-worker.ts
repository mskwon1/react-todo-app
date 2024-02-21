import { setupWorker } from 'msw/browser';
import { HttpResponse, http } from 'msw';

const todos: Todo[] = [
  {
    id: '1',
    title: 'Hello World',
    isDone: false,
  },
  {
    id: '2',
    title: 'I am Done',
    isDone: true,
  },
];

const pause = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ms);
  });

const mockWorker = setupWorker(
  http.get('/api/todos', async () => {
    await pause(1000);
    return HttpResponse.json(todos);
  })
);

export default mockWorker;
