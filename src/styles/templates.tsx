import styled from 'styled-components';

import { fadeIn } from './animation';

export const Button = styled.button`
  ${fadeIn()};
  background: var(--white);
  color: var(--gray-text);
  outline: none;
  /* border: 1px rgba(0, 0, 0, 0.2) solid; */
  border-radius: 3px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 200px;
  font-weight: 600;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  font-style: italic;
  &:hover {
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  ${fadeIn()};
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
  h3,
  span,
  p {
    color: var(--gray-text);
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
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
  & > * {
    font-weight: inherit;
    color: inherit;
  }
  /* width: 800px; */
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-style: italic;
  font-size: 1.5rem;
  text-align: center;
`;
