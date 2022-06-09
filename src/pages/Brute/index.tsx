import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Code } from '../../components/Code';
import { Container } from '../../styles/templates';
import { Line, Subtitle, Text, Title } from '../../styles/templates';
import { BruteAnimation } from '../../components/BruteAnimation';

export const Brute = () => {
  const code =
    'int corte_varilla(int precios[], int n) {\n  ' +
    'if (n == 0)\n    return 0;\n\n  ' +
    'int max = INT_MIN;\n  ' +
    'int costo, i;\n\n  ' +
    'for (i = 1; i <= n; i++) {\n    ' +
    'costo = precios[i - 1] + corte_varilla(precios, n - i);\n\n    ' +
    'if (costo > max)\n      ' +
    'max = costo;\n  }\n\n  ' +
    'return max;\n}';

  return (
    <Fragment>
      <Helmet>
        <title> Fuerza bruta </title>
      </Helmet>
      <Container>
        <Title> Programación por fuerza bruta </Title>
        <Line />
        <Subtitle> funcionamiento </Subtitle>
        <Text>
          El algoritmo busca guardar en cada iteración el resultado de la suma
          del valor actual del precio más la suma de la llamada recursiva a la
          función. <br />
          Inmediatamente después compara el resultado obtenido con el valor
          anterior para obtener el máximo de las sumas.
        </Text>
        <Line />
        <Subtitle> complejidad temporal </Subtitle>
        <Text>
          La complejidad temporal de este algoritmo recursivo es O(c<sup>n</sup>
          ), lo que lo convierte en un algoritmo exponencial y lo hace altamente
          ineficiente.
        </Text>
        <Line />
        <Code code={code} />
        <BruteAnimation />
      </Container>
    </Fragment>
  );
};
