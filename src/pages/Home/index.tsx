import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Code } from '../../components/Code';
import { Array } from '../../components/Array';
import { Container } from '../../styles/templates';
import { Animation } from '../../components/Animation';
import { Div, Img, Subtitle, Text, Title } from './styles';

export const Home = () => {
  const len = [1, 2, 3, 4, 5, 6, 7, 8];
  const prices = [1, 5, 8, 9, 10, 17, 17, 20];

  return (
    <Fragment>
      <Helmet>
        <title> Algoritmo de corte de varillas</title>
      </Helmet>
      <Container>
        <Title>Problema de corte de varillas</Title>
        <Subtitle> descripción </Subtitle>
        <Text>
          Dada una barra de n pulgadas de longitud y una matriz de precios que
          incluye los precios de todas las piezas de tamaño menor o igual que n,
          determine el valor máximo que se puede obtener cortando la varilla y
          vendiendo las piezas. <br /> <br />
          Los valores de precios se pueden repetir siempre y cuando no se rebase
          la longitud máxima.
        </Text>
        {/* <Subtitle> funcionamiento</Subtitle>
        <Text>
          El algoritmo busca establecer dentro de un nuevo arreglo, los maximos
          valores posibles para cada valor de longitud de la varilla. Al final,
          la ultima posicion en el arreglo es la solucion al problema.
        </Text> */}
        <Div>
          <Array color="gray" items={len} name="longitud" />
          <Array color="gray" items={prices} name="precios" />
        </Div>
        <Text>
          Para este ejemplo, el máximo valor obtenible sería igual a 22, el cuál
          se obtiene de cortar la varilla en 2 pedazos de longitud 2 y 6,
          correspondientemente.
        </Text>
        <Img src="https://i.imgur.com/HYSWhSn.png" alt="corte" />
        {/* <Example>
            <Code />
            <Animation />
          </Example> */}
      </Container>
    </Fragment>
  );
};
