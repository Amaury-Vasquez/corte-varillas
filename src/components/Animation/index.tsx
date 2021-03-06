import { Slider } from '../Slider';
import { Button } from '../../styles/templates';
import { Array } from '../Array';
import { PricesForm } from '../PricesForm';
import { useRodCut } from '../../hooks/useRodCut';
import { Color, Description, DescriptionBar, Div, PriceModify } from './styles';
import { Fragment } from 'react';

export const Animation = () => {
  const {
    aux,
    buttonClicked,
    buttonText,
    callback,
    colorPrices,
    colorValues,
    handleChange,
    hide,
    i,
    len,
    max,
    prices,
    values,
  } = useRodCut();

  return (
    <Div>
      <Button onClick={buttonClicked}> {buttonText} </Button>
      {!hide && (
        <PriceModify>
          <Slider callback={handleChange} min={1} max={10} value={len} />
          <PricesForm callback={callback} len={len} />
        </PriceModify>
      )}
      {hide && (
        <Fragment>
          <Array
            callback={colorPrices}
            items={prices}
            len={prices.length}
            name="precios"
          />
          <Array
            callback={colorValues}
            items={values.slice(0, i)}
            len={values.length}
            name="valores"
          />
          <DescriptionBar>
            <Description>
              <Color color="green" /> posicion i
            </Description>
            <Description>
              <Color color="gray" />
              posicion j
            </Description>
            <Description>{`max_val = ${max}`}</Description>
            <Description>{`aux = ${aux ? aux : '?'}`}</Description>
          </DescriptionBar>
        </Fragment>
      )}
    </Div>
  );
};
