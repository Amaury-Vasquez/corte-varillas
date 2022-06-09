import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 5px;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);

  & > a {
    font-weight: 500;
    text-align: center;
    color: var(--white);
    text-transform: capitalize;
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    border-radius: 3px;
    border-right: 2px rgba(256, 256, 256, 0.2) solid;
  }

  & > a:first-child {
    border-left: 2px rgba(256, 256, 256, 0.2) solid;
  }

  & > a:hover {
    background: rgba(1, 1, 1, 0.1);
  }
`;
