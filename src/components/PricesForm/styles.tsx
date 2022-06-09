import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Div = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form<{ len: number }>`
  ${fadeIn()};
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  width: auto;
  height: 40px;
  grid-template-columns: ${(props) => `repeat(${props.len}, 1fr)`};
  grid-gap: 10px;
  & > * {
    border: none;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: var(--gray-text);
    border-radius: 3px;
  }
`;

export const Input = styled.input`
  ${fadeIn({ time: '0.4s' })};
  width: 60px;
  height: 40px;
  background: transparent;
  outline: none;
`;

export const Submit = styled.input`
  width: 100px;
  background: var(--green);
  font-weight: 600;
  &:hover {
    opacity: 0.6;
    outline: none;
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
