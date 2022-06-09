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
  width: 90vw;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
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
  @media screen and (min-width: 1500px) {
    width: 70vw;
  }
  padding-bottom: 100px;
`;

export const Line = styled.hr`
  display: flex;
  width: 100%;
  border: 1px solid var(--gray);
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Page = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
`;

export const Subtitle = styled.h2`
  padding: 5px;
  margin-top: 20px;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  padding: 0 20px;
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
  margin-top: 5px;
  font-style: italic;
  font-size: 1.5rem;
  text-align: center;
`;
