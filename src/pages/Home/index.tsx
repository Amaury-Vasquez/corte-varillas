import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Code } from '../../components/Code';
import { Animation } from '../../components/Animation';
import { Container, Example, HomePage, Subtitle, Text, Title } from './styles';

export const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Dp | Algoritmo-corte-varillas</title>
      </Helmet>
      <HomePage>
        <Container>
          <Title>Problema de corte de varillas</Title>
          <Subtitle> descripcion </Subtitle>
          <Text>
            Dada una barra de n pulgadas de longitud y una matriz de precios que
            incluye los precios de todas las piezas de tamaño menor que n,
            determine el valor máximo que se puede obtener cortando la varilla y
            vendiendo las piezas.
          </Text>
          <Subtitle> funcionamiento</Subtitle>
          <Text>
            El algoritmo busca establecer dentro de un nuevo arreglo, los
            maximos valores posibles para cada valor de longitud de la varilla.
            Al final, la ultima posicion en el arreglo es la solucion al
            problema.
          </Text>
          <Example>
            <Code />
            <Animation />
          </Example>
        </Container>
      </HomePage>
    </Fragment>
  );
};
