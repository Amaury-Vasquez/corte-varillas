import React, { ReactElement, useEffect, useState } from 'react';

export const useRodCut = () => {
  // Funciones
  const colorPrices = (index: number) => {
    return j - 1 === index ? 'gray' : 'white';
  };
  const colorValues = (index: number) => {
    if (i - j - 1 === index) return i - 1 === index ? 'green' : 'gray';
    return i - 1 === index ? 'green' : 'white';
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    setLen(val);
  };

  // Estado
  const [aux, setAux] = useState<number>();
  const [i, setI] = useState<number>(1);
  const [j, setJ] = useState<number>(0);
  const [len, setLen] = useState<number>(8);
  const [max, setMax] = useState<number>(-1);
  const prices = [1, 5, 8, 9, 10, 17, 17, 20, 22, 25];
  const [values, setValues] = useState<Array<number>>([0]);

  // Efectos
  useEffect(() => {
    const rodCut = () => {
      const arr: Array<number> = [0];
      for (let i = 1; i <= len; i++) {
        let max = -1;
        for (let j = 0; j < i; j++) {
          let aux = prices[j] + arr[i - j - 1];
          max = max > aux ? max : aux;
        }
        arr.push(max);
      }
      return arr;
    };
    setValues(rodCut());
  }, [len, setValues]);

  useEffect(() => {
    if (j < i || i < len) {
      setTimeout(() => {
        if (j < i) {
          const tmp = prices[j] + values[i - j - 1];
          setAux(tmp);
          setMax(max > tmp ? max : tmp);
          setJ(j + 1);
        } else if (i < len) {
          setJ(0);
          setI(i + 1);
          setAux(undefined);
          setMax(-1);
        }
      }, 700);
    } else {
      setI(i + 1);
      setTimeout(() => {
        setJ(0);
        setI(1);
      }, 3000);
    }
  }, [j, setAux, setJ, setI, setMax]);

  return {
    aux,
    colorPrices,
    colorValues,
    handleChange,
    i,
    j,
    len,
    max,
    prices,
    values,
  };
};
