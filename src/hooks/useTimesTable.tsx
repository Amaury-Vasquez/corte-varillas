interface Data {
  n: number;
  time: string;
}

export const useTimesTable = () => {
  const bruta: Data[] = [
    { n: 10, time: '22.17μs' },
    { n: 20, time: '8.71ms' },
    { n: 22, time: '0.026s' },
    { n: 24, time: '0.105s' },
    { n: 26, time: '0.421s' },
    { n: 30, time: '6.551s' },
    { n: 35, time: '196.39s' },
  ];

  const dinamica: Data[] = [
    // { n: 10, time: '.9537μs' },
    // { n: 20, time: '2.861μs' },
    // { n: 50, time: '10.01μs' },
    // { n: 100, time: '36.95μs' },
    // { n: 1000, time: '3.608ms' },
    { n: 5000, time: '0.0958s' },
    { n: 10000, time: '0.3598s' },
    { n: 50000, time: '9.0004s' },
    { n: 100000, time: '28.1611s' },
    { n: 200000, time: '98.5795s' },
    { n: 300000, time: '225.453s' },
    { n: 400000, time: '394.425s' },
  ];

  return { bruta, dinamica };
};
