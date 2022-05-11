import { Container, HomePage, Subtitle, Text, Title } from './styles';
import { Animation } from '../../components/Animation';

export const Home = () => {
  return (
    <HomePage>
      <Container>
        <Title>Problema de corte de varillas</Title>
        <Subtitle> Descripcion </Subtitle>
        <Text>
          Dada una barra de n pulgadas de longitud y una matriz de precios que
          incluye los precios de todas las piezas de tamaño menor que n,
          determine el valor máximo que se puede obtener cortando la varilla y
          vendiendo las piezas.
        </Text>
        <Animation />
      </Container>
    </HomePage>
  );
};
