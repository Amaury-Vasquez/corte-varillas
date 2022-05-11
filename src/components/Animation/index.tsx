import {
  Array,
  ArrayName,
  Color,
  Description,
  DescriptionBar,
  Div,
  Items,
} from './styles';
import { useRodCut } from '../../hooks/useRodCut';

export const Animation = () => {
  const { n, length, prices } = useRodCut();
  return (
    <Div>
      <Array len={length.length}>
        <ArrayName> length [] = </ArrayName>
        {length.map((item, i) => (
          <Items color="" fill={n === i} key={'length' + item + i}>
            {item}
          </Items>
        ))}
      </Array>
      <Array len={prices.length}>
        <ArrayName> price [] = </ArrayName>
        {prices.map((item, i) => (
          <Items
            color={n === i ? 'gray' : 'green'}
            fill={n === i}
            key={'price' + item + i}
          >
            {item}
          </Items>
        ))}
      </Array>
      <DescriptionBar>
        <Description>
          <Color color="gray" />
          recursion
        </Description>
        <Description>
          <Color color="green" />
          Ciclo
        </Description>
        <Description>{`costo = 0`}</Description>
      </DescriptionBar>
    </Div>
  );
};
