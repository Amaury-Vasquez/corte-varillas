import {
  Array,
  ArrayName,
  Color,
  Description,
  DescriptionBar,
  Div,
  Items,
} from './styles';
import { Slider } from '../Slider';
import { useRodCut } from '../../hooks/useRodCut';

export const Animation = () => {
  const {
    aux,
    colorPrices,
    colorValues,
    handleChange,
    i,
    len,
    max,
    prices,
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
