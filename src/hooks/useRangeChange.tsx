import { useState } from 'react';

export const useRangeChange = (initialValue: number) => {
  const [len, setLen] = useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    setLen(val);
  };

  return { handleChange, len };
};
