import { useEffect, useState } from 'react';

export const useRodCut = () => {
  const initialN = 8;
  const [restart, setRestart] = useState(false);
  const [n, setN] = useState<number>(initialN);
  const [loop, setLoop] = useState<number[]>([]);
  const length = [1, 2, 3, 4, 5, 6, 7, 8];
  const prices = [1, 5, 8, 9, 10, 17, 17, 20];
  useEffect(() => {
    setTimeout(() => {
      if (!restart) n !== 0 ? setN(n - 1) : setRestart(!restart);
      else n !== initialN ? setN(n + 1) : setRestart(!restart);
    }, 700);
  }, [n, restart, setN, setRestart]);
  return { length, loop, n, prices };
};
