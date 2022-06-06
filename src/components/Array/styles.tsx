import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const Arr = styled.div<{ len: number }>`
  height: min(50px, 10vh);
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.len + 1}, 1fr)`};
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
    border: 1px rgba(0, 0, 0, 0.2) solid;
    border-right: none;
    overflow: hidden;
    border-radius: 2px;
    text-transform: capitalize;
  }
  & > :first-child {
    border: none;
  }
  & > :last-child {
    border-right: 1px rgba(0, 0, 0, 0.2) solid;
  }
  /* border-radius: var(--radius); */
`;

export const Name = styled.span`
  border: none;
  font-weight: 600;
`;

export const Item = styled.span<{ color: string; fill: boolean }>`
  ${fadeIn({ time: '1.5s' })}
  font-weight: 500;
  ${(props) => props.fill && `background: var(--${props.color})`};
`;
