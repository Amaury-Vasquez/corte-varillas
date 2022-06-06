import { Slider } from '../Slider';
import { PricesForm } from '../PricesForm';
import { useRodCut } from '../../hooks/useRodCut';
import {
  Array,
  ArrayName,
  Button,
  Color,
  Description,
  DescriptionBar,
  Div,
  Items,
} from './styles';

export const Animation = () => {
  const {
    buttonClicked,
    callback,
    colorPrices,
    colorValues,
    handleChange,
    hide,
    i,
    len,
    max,
    prices,
    setPrices,
    values,
  } = useRodCut();

  return (
    <Div>
      <Slider callback={handleChange} value={len} />
      <Array len={prices.length}>
        <ArrayName> {'precios'} </ArrayName>
        {prices.slice(0, len).map((item, index) => (
          <Items
            color={colorPrices(index)}
            fill={true}
            key={'price' + item + index}
          >
            {item}
          </Items>
        ))}
      </Array>
      {hide ? (
        <Button onClick={() => buttonClicked()}> Cambiar precios </Button>
      ) : (
        <PricesForm callback={(arr: []) => callback(arr)} len={len} />
      )}
      <Array len={prices.length + 1}>
        <ArrayName> {'valores'}</ArrayName>
        {values.slice(0, i).map((item, index) => (
          <Items
            color={colorValues(index)}
            fill={true}
            key={'value' + item + index}
          >
            {item}
          </Items>
        ))}
      </Array>
      <DescriptionBar>
        <Description>
          <Color color="green" /> posicion i
        </Description>
        <Description>
          <Color color="gray" />
          posicion j
        </Description>
        <Description>{`max_val = ${max}`}</Description>
      </DescriptionBar>
    </Div>
  );
};
