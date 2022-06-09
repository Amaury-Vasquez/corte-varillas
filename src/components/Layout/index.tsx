import { Fragment } from 'react';

import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { Page } from '../../styles/templates';

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Page>
        <NavBar />
        {props.children}
        <Footer />
      </Page>
    </Fragment>
  );
};
