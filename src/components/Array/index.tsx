import { Arr, Name, Item } from './styles';

export const Array = (props: {
  color: string;
  items: Array<number>;
  name: string;
}) => {
  const { color, items, name } = props;
  return (
    <Arr len={items.length}>
      <Name> {name} </Name>
      {items.map((item, index) => (
        <Item color={color} fill={true} key={name + item + index}>
          {item}
        </Item>
      ))}
    </Arr>
  );
};
