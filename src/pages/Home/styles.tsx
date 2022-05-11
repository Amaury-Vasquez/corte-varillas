import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  height: auto;
  margin: 0 auto;
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
export const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 15px;
  & > * {
    box-sizing: inherit;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 40px;
  font-size: 1.2rem;
`;

export const Text = styled.p`
  margin-top: 20px;
  /* text-align: justify; */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-style: italic;
  font-size: 1.5rem;
  text-align: center;
`;
