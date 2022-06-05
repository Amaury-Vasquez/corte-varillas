import { Fragment } from 'react';

import { NavBar } from '../NavBar';
import { Page } from '../../styles/templates';

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Page>
        <NavBar />
        {props.children}
      </Page>
    </Fragment>
  );
};
