import { Fragment } from 'react';

import { Array } from '../Array';
import { Slider } from '../Slider';
import { ArrayIndex } from '../ArrayIndex';
import { Div, Span } from './styles';
import { Button } from '../../styles/templates';
import { useBruteForce } from '../../hooks/useBruteForce';

export const BruteAnimation = () => {
  const { arr, len, handleChange, handleReset, getText, total } =
    useBruteForce(2);

  return (
    <Div>
      <Button onClick={() => handleReset()}> {getText()}</Button>
      <Slider callback={handleChange} min={1} max={20} value={len} />
      <Span> Llamadas recursivas </Span>
      <Array items={arr} len={arr.length} name={''} />
      <ArrayIndex len={arr.length} />
      {arr.length > 0 && <Span> {`Total de llamadas: ${total}`} </Span>}
      {arr.length > 0 && (
        <Span> {`Total de operaciones básicas: ${total * arr.length}`} </Span>
      )}
    </Div>
  );
};
