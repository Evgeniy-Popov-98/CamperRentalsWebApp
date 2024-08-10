import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoudPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={css.notFoudBox}>
      <div>
        <h1>Page you visited doesn&apos;t exist.</h1>
        <h2>You will be redirected to Home in {5 - timer} seconds</h2>
      </div>
      <Link className={css.goHomeButton} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoudPage;
