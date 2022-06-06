import styled from 'styled-components';

export const Div = styled.div`
  height: auto;
  width: auto;
  padding: var(--padding);
  margin-top: 30px;
  & > * {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  height: 100px;
  width: auto;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Subtitle = styled.h2`
  margin-top: 40px;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  /* text-align: justify; */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  /* width: 800px; */
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-style: italic;
  font-size: 1.5rem;
  text-align: center;
`;
