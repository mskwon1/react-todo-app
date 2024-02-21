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

const mockWorker = setupWorker(
  http.get('/api/todos', ({ request }) => {
    console.log(request);
    return HttpResponse.json(todos);
  })
);

export default mockWorker;
