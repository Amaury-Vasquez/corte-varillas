import { Input, Name, Range, Slide } from './styles';

export const Slider = (props: { callback: Function; value: number }) => {
  const { callback, value } = props;
  return (
    <Slide>
      <Name> longitud </Name>
      <Input
        type={'range'}
        min="0"
        max="10"
        value={value}
        onChange={(event) => callback(event)}
      />
      <Range> {value}</Range>
    </Slide>
  );
};
