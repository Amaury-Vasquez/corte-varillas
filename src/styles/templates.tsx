import styled from 'styled-components';

export const Container = styled.div`
  width: min(1000px, 80vw);
  height: auto;
  margin: 0 auto;
  padding: 15px;
  & > * {
    margin: 0 auto;
    box-sizing: inherit;
  }
  & > h1,
  h2,
  span,
  p {
    color: var(--gray-text);
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
`;
