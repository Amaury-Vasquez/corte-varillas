import styled from 'styled-components';

export const Foot = styled.footer`
  width: 100vw;
  height: 60px;
  background: var(--blue);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;

  & > span {
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* width: 100%; */
    padding: 0 20px;
    border-left: 3px solid rgba(256, 256, 256, 0.2);
  }
`;
