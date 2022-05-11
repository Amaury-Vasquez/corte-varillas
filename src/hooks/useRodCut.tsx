import { useEffect, useState } from 'react';

export const useRodCut = () => {
  const initialN = 8;
  const [n, setN] = useState<number>(initialN);
  const [loop, setLoop] = useState<number[]>([]);
  const length = [1, 2, 3, 4, 5, 6, 7, 8];
  const prices = [1, 5, 8, 9, 10, 17, 17, 20];
  useEffect(() => {
    n !== 0 ? setTimeout(() => setN(n - 1), 700) : () => {};
  }, [n, setN]);
  return { length, loop, n, prices };
};
