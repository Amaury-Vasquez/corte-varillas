import React, { useEffect, useState } from 'react';

import { useRangeChange } from './useRangeChange';

export const useRodCut = () => {
  // Funciones
  const buttonClicked = () => {
    setHide(!hide);
    setButtonText(hide ? 'Cancelar' : 'Cambiar precios');
  };

  const callback = (arr: []) => {
    setPrices(() => arr);
    setHide(!hide);
  };

  const colorPrices = (index: number) => {
    return j - 1 === index ? 'gray' : 'white';
  };

  const colorValues = (index: number) => {
    if (i - j - 1 === index) return i - 1 === index ? 'green' : 'gray';
    return i - 1 === index ? 'green' : 'white';
  };

  // Estado
  const [aux, setAux] = useState<number>();
  const [buttonText, setButtonText] = useState<string>('Cambiar precios');
  const [hide, setHide] = useState(true);
  const [i, setI] = useState<number>(1);
  const [j, setJ] = useState<number>(0);
  const { len, handleChange } = useRangeChange(5);
  const [max, setMax] = useState<number>(-1);
  const [prices, setPrices] = useState<Array<number>>([1, 5, 8, 9, 10]);
  const [values, setValues] = useState<Array<number>>([0]);

  // Efectos
  useEffect(() => {
    setValues(() => {
      const arr: Array<number> = [0];
      for (let i = 1; i <= prices.length; i++) {
        let max = -1;
        for (let j = 0; j < i; j++) {
          let aux = prices[j] + arr[i - j - 1];
          max = max > aux ? max : aux;
        }
        arr.push(max);
      }
      return arr;
    });
  }, [prices, setValues]);

  useEffect(() => {
    let render = true;
    if (render) {
      if (j < i || i < prices.length) {
        setTimeout(() => {
          if (j < i) {
            const tmp = prices[j] + values[i - j - 1];
            setAux(tmp);
            setMax(max > tmp ? max : tmp);
            setJ(j + 1);
          } else if (i < prices.length) {
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
          setMax(-1);
        }, 3000);
      }
    }

    return () => {
      render = false;
    };
  }, [j, prices, setAux, setJ, setI, setMax]);

  return {
    aux,
    buttonClicked,
    buttonText,
    callback,
    colorPrices,
    colorValues,
    handleChange,
    hide,
    i,
    j,
    len,
    max,
    prices,
    setPrices,
    values,
  };
};
