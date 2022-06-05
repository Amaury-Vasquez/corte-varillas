import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Code } from '../../components/Code';
import { Array, ArrayName, Items } from '../../components/Animation/styles';
import { Container } from '../../styles/templates';
import { Animation } from '../../components/Animation';
import { Example, Subtitle, Text, Title } from './styles';

export const Home = () => {
  const len = [1, 2, 3, 4, 5, 6, 7, 8];
  const prices = [1, 5, 8, 9, 10, 17, 17, 20];

  return (
    <Fragment>
      <Helmet>
        <title> Dp | Algoritmo-corte-varillas</title>
      </Helmet>
      <Container>
        <Title>Problema de corte de varillas</Title>
        <Subtitle> descripcion </Subtitle>
        <Text>
          Dada una barra de n pulgadas de longitud y una matriz de precios que
          incluye los precios de todas las piezas de tamaño menor o igual que n,
          determine el valor máximo que se puede obtener cortando la varilla y
          vendiendo las piezas.
        </Text>
        {/* <Subtitle> funcionamiento</Subtitle>
        <Text>
          El algoritmo busca establecer dentro de un nuevo arreglo, los maximos
          valores posibles para cada valor de longitud de la varilla. Al final,
          la ultima posicion en el arreglo es la solucion al problema.
        </Text> */}
        <Array len={len.length}>
          <ArrayName> longitud </ArrayName>
          {len.map((item, index) => (
            <Items color={'gray'} fill={true} key={'price' + item + index}>
              {item}
            </Items>
          ))}
        </Array>
        <Array len={prices.length}>
          <ArrayName> precios </ArrayName>
          {prices.map((item, index) => (
            <Items color={'gray'} fill={true} key={'price' + item + index}>
              {item}
            </Items>
          ))}
        </Array>
        {/* <Example>
            <Code />
            <Animation />
          </Example> */}
      </Container>
    </Fragment>
  );
};
