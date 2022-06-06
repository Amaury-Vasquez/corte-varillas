import { Helmet } from 'react-helmet-async';

import { Example } from './styles';
import { Code } from '../../components/Code';
import { Container } from '../../styles/templates';
import { Animation } from '../../components/Animation';
import { Fragment } from 'react';

export const Dp = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Solución (dp) </title>
      </Helmet>
      <Container>
        <Example>
          <Code />
          <Animation />
        </Example>
      </Container>
    </Fragment>
  );
};
