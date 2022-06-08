import { Input, Name, Range, Slide } from './styles';

export const Slider = (props: {
  callback: Function;
  min: number;
  max: number;
  value: number;
}) => {
  const { callback, min, max, value } = props;
  return (
    <Slide>
      <Name> longitud </Name>
      <Input
        type={'range'}
        min={min}
        max={max}
        value={value}
        onChange={(event) => callback(event)}
      />
      <Range> {value}</Range>
    </Slide>
  );
};
