import { Arr, Name, Item } from './styles';

export const Array = (props: {
  callback?: Function;
  color?: string;
  items: Array<number>;
  len: number;
  name: string;
}) => {
  const { callback, color, items, name } = props;
  return (
    <Arr len={name !== '' ? items.length : items.length - 1} name={name !== ''}>
      {name !== '' && <Name> {name} </Name>}
      {items.map((item, index) => (
        <Item
          color={callback ? callback(index) : color ? color : 'gray'}
          fill={true}
          key={`${items.length} + ${name} + ${color} + ${item} + ${index}`}
        >
          {item}
        </Item>
      ))}
    </Arr>
  );
};
