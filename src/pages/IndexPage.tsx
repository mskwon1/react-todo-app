import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        gap: 8,
      })}
    >
      <h1>Todo page using ...</h1>
      <ul>
        <li>
          <Link to="/zustand">Zustand</Link>
        </li>
      </ul>
    </div>
  );
}
