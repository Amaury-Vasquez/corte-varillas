import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <Link to={'/'}> algoritmo</Link>
      <Link to={'/fuerza-bruta'}> fuerza bruta</Link>
      <Link to={'/dynamic-programming'}> dp</Link>
    </Nav>
  );
};
