import { useState } from 'react';
import { ProgressBar } from '../containers/index';

export const Progress = () => {
  const [data, setData] = useState({ w: 0, y: 0 });
  const [total, setTotal] = useState();

  window.addEventListener('scroll', () => {
    setData({ w: window.outerWidth, y: window.scrollY });
    setTotal((data.y * 100) / data.w / 1.55);
  });

  return <ProgressBar w={total} />;
};
