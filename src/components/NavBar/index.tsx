import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <Link to={'/'}> descripción</Link>
      <Link to={'/fuerza-bruta'}> solución bruta</Link>
      <Link to={'/dynamic-programming'}> solución dp</Link>
      <Link to={'/comparativa'}> comparativa </Link>
    </Nav>
  );
};
