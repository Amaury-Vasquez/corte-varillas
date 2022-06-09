import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Div, Img } from './styles';
import { Code } from '../../components/Code';
import { Array } from '../../components/Array';
import { Container } from '../../styles/templates';
import { Animation } from '../../components/Animation';
import { Line, Subtitle, Text, Title } from '../../styles/templates';

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
        <Line />
        <Subtitle> descripción </Subtitle>
        <Text>
          Dada una barra de n pulgadas de longitud y una matriz de precios que
          incluye los precios de todas las piezas de tamaño menor o igual que n,
          determine el valor máximo que se puede obtener cortando la varilla y
          vendiendo las piezas. <br /> <br />
          Los valores de precios se pueden repetir siempre y cuando no se rebase
          la longitud máxima. <br />
        </Text>
        <Div>
          <Array color="white" items={len} len={len.length} name="longitud" />
          <Array
            color="white"
            items={prices}
            len={prices.length}
            name="precios"
          />
        </Div>
        <Text>
          <br />
          Para este ejemplo, el máximo valor obtenible sería igual a 22, el cuál
          se obtiene de cortar la varilla en 2 pedazos de longitud 2 y 6,
          correspondientemente. <br />
        </Text>
        <Img src="https://i.imgur.com/HYSWhSn.png" alt="corte" />
      </Container>
    </Fragment>
  );
};
