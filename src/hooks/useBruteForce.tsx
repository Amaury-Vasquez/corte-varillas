import { useEffect, useState } from 'react';

import { useRangeChange } from './useRangeChange';

export const useBruteForce = (n: number) => {
  const getCalls = (n: number) => {
    var a: number[] = [];
    for (let i = 0; i < n; i++) a.push(0);
    const f = (n: number, a: number[]) => {
      if (n === 0) return 0;

      for (let i = 1; i <= n; i++) {
        f(n - i, a);
        a[i - 1] = a[i - 1] + 1;
      }
    };
    f(n, a);
    return a;
  };

  const getText = () => {
    if (stop) return 'Iniciar animación';
    else if (arr.length === len) return 'Reiniciar animacion';
    else return 'Parar animacion';
  };

  const handleReset = () => {
    setStop(!stop);
    setArr(() => []);
  };

  const { len, handleChange } = useRangeChange(n);
  const [arr, setArr] = useState<number[]>([]);
  const [stop, setStop] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const recursiveCalls: number[] = getCalls(20);

  useEffect(() => {
    setStop(true);
    setArr(() => []);
  }, [len, setArr]);

  useEffect(() => {
    let render = true;
    if (render) {
      if (!stop && arr.length < len) {
        setTimeout(() => {
          const tmp = [...recursiveCalls];
          setArr(() =>
            tmp.slice(
              recursiveCalls.length - (arr.length + 1),
              recursiveCalls.length
            )
          );
        }, 1000);
      }
    }
    return () => {
      render = false;
    };
  }, [arr, stop, setStop]);

  useEffect(() => {
    setTotal(() => {
      let sum = 0;
      arr.forEach((item) => (sum += item));
      return sum;
    });
  }, [arr]);

  return { arr, len, handleChange, handleReset, getText, total };
};
