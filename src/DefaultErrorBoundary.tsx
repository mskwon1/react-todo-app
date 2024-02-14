import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function DefaultErrorBoundary() {
  const error = useRouteError();

  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>unknown error</h1>
  );
}
