import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <Link to={'/'}> descripción</Link>
      <Link to={'/brute-force'}> solución bruta</Link>
      <Link to={'/dynamic-programming'}> solución dp</Link>
      <Link to={'/contrast'}> comparativa </Link>
    </Nav>
  );
};
