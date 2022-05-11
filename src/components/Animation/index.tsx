import {
  Array,
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
      {/* <Array>
        {length.map((item, i) => (
          <Items recursion={false} key={'length' + item + i}>
            {item}
          </Items>
        ))}
      </Array> */}
      <Array>
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
