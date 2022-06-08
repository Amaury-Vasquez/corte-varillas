import { Fragment } from 'react';

import { Array } from '../Array';
import { Slider } from '../Slider';
import { ArrayIndex } from '../ArrayIndex';
import { ButtonDiv, Div, Span } from './styles';
import { Button } from '../../styles/templates';
import { useBruteForce } from '../../hooks/useBruteForce';

export const BruteAnimation = () => {
  const { arr, len, handleChange, handleReset, stop } = useBruteForce(2);

  return (
    <Div>
      <ButtonDiv>
        <Button onClick={() => handleReset()}>Reiniciar animación</Button>
      </ButtonDiv>
      <Fragment>
        <Slider callback={handleChange} min={1} max={15} value={len} />
        <Span> Llamadas recursivas </Span>
        <Array items={arr} len={arr.length} name={''} />
        <ArrayIndex len={arr.length} />
      </Fragment>
    </Div>
  );
};
