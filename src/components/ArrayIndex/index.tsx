import { useEffect, useState } from 'react';
import { Arr } from './styles';

export const ArrayIndex = (props: { len: number }) => {
  const { len } = props;
  const arr = [];
  for (let i = 0; i < len; i++) arr.push(i);

  return (
    <Arr len={arr.length}>
      {arr.map((item, index) => (
        <span key={`${arr.length}` + `index` + item + index}>
          {`[ ${item} ]`}
        </span>
      ))}
    </Arr>
  );
};
