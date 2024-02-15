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
        <li>
          <Link to="/recoil">Recoil</Link>
        </li>
        <li>
          <Link to="/jotai">Jotai</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
      </ul>
    </div>
  );
}
