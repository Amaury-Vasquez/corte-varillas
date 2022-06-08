import styled from 'styled-components';

import { fadeIn, fadeOut } from '../../styles/animation';

export const Arr = styled.div<{ len: number; name?: boolean }>`
  height: min(50px, 10vh);
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.len}, 1fr)`};
  align-items: center;
  & > span {
    color: var(--gray-text);
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--blue);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    /* border: 1px solid var(--blue); */
    /* border: 1px rgba(0, 0, 0, 0.2) solid; */
    border-right: none;
    overflow: hidden;
    border-radius: 2px;
    text-transform: capitalize;
    ${fadeIn()};
  }

  /* border-radius: var(--radius); */
`;
