import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Caption, Div, Table, TableName, Th, Tr } from './styles';
import { useTimesTable } from '../../hooks/useTimesTable';
import { Container, Text, Title } from '../../styles/templates';

export const Constrast = () => {
  const { bruta, dinamica } = useTimesTable();

  return (
    <Fragment>
      <Helmet>
        <title> Comparativa soluciones </title>
      </Helmet>
      <Container>
        <Title> Solución bruta vs solución dinámica </Title>
        <Text>
          <br />
          Cuando se crean algoritmos para resolver un problema, se busca que
          estos sean lo más eficientes posibles. Un algoritmo se considera
          eficiente cuando produce una respuesta correcta utilizando el menor
          numero de operaciones y memoria posibles. <br /> <br />
          El objetivo de este proyecto es mostrar la diferencia entre un
          algoritmo eficiente vs uno no eficiente, para así demostrar al
          programador la importancia de implementar algoritmos eficientes para
          resolver un problema.
        </Text>
        <TableName> Tabla comparativa de tiempos </TableName>
        <Div>
          <Table>
            <Caption> Algoritmo de fuerza bruta </Caption>
            <Tr>
              <Th>Tamaño n</Th>
              <Th>Tiempo</Th>
            </Tr>
            {bruta.map((data, i) => (
              <Tr key={'dinamica' + i}>
                <td>{data.n}</td>
                <td>{data.time}</td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Caption> Algoritmo de dp </Caption>
            <Tr>
              <Th>Tamaño n</Th>
              <Th>Tiempo</Th>
            </Tr>
            {dinamica.map((data, i) => (
              <Tr key={'dinamica' + i}>
                <td>{data.n}</td>
                <td>{data.time}</td>
              </Tr>
            ))}
          </Table>
        </Div>
      </Container>
    </Fragment>
  );
};
