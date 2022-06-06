import styled from 'styled-components';

export const Nav = styled.nav`
  width: 600px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-top: 10px;
  background: var(--gray);
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 3px;
  margin-bottom: 20px;

  & > a {
    font-weight: 400;
    text-align: center;
    color: var(--gray-text);
    text-transform: capitalize;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    border-right: 1px rgba(0, 0, 0, 0.2) solid;
  }

  & > a:last-child {
    border-right: none;
  }

  & > a:hover {
    background: rgba(1, 1, 1, 0.1);
  }
`;
