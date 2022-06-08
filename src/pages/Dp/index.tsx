import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Example } from './styles';
import { Code } from '../../components/Code';
import { Container } from '../../styles/templates';
import { Animation } from '../../components/Animation';
import { Subtitle, Text, Title } from '../../styles/templates';
export const Dp = () => {
  const code =
    'int corte_varilla(int precios[], int n) {\n  ' +
    'int aux, i, j, valores[n + 1];\n  ' +
    'valores[0] = 0;\n\n  ' +
    'for(i = 1; i <= n; i++) {\n    ' +
    'int max_val = INT_MIN;\n    ' +
    'for(j = 0; j < i; j++) {\n      ' +
    'aux = precios[j] + valores[i - j - 1];\n      ' +
    'max_val = max(max_val, aux);\n    ' +
    '}\n    ' +
    'valores[i] = max_val;\n  }\n  ' +
    'return valores[n];\n}';

  return (
    <Fragment>
      <Helmet>
        <title>Solución (dp) </title>
      </Helmet>
      <Container>
        <Title> Programación dinámica (dp) </Title>
        <Subtitle> funcionamiento</Subtitle>
        <Text>
          El algoritmo busca establecer dentro de un nuevo arreglo, los maximos
          valores posibles para cada valor de longitud de la varilla. Al final,
          la ultima posicion en el arreglo es la solucion al problema.
        </Text>
        <Subtitle> complejidad temporal </Subtitle>
        <Text>
          La función se compone de un ciclo for anidado dentro de otro, por lo
          que al calcular la cantidad de operaciones básicas que se realizan, la
          cota O obtenida seria igual a 0(n<sup>2</sup>). <br />
          Debido a esto es un algoritmo cuadrático, a pesar de esto y en parte
          por la complejidad del problema, esta solución es considerada como
          eficiente para el problema dado.
          <br /> <br />
        </Text>
        <Example>
          <Code code={code} />
          <Animation />
        </Example>
      </Container>
    </Fragment>
  );
};
