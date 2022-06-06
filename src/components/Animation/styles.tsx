import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Array = styled.div<{ len: number }>`
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

export const ArrayName = styled.span`
  border: none;
  font-weight: 600;
`;

export const Button = styled.button`
  ${fadeIn()};
  background: var(--green);
  color: var(--gray-text);
  outline: none;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  font-weight: 600;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Color = styled.span<{ color: string }>`
  height: 30px;
  width: 30px;
  background: ${(props) => `var(--${props.color})`};
  border-radius: var(--radius);
  margin-right: 5px;
`;

export const Description = styled.span`
  /* font-size: 1rem; */
  /* font-weight: 600; */
  /* color: var(--gray-text); */
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  /* text-transform: capitalize; */
`;

export const DescriptionBar = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Div = styled.div`
  width: min(900px, 75vw);
  height: auto;
  display: block;
  & > * {
    margin-top: 30px;
  }
`;

export const Items = styled.span<{ color: string; fill: boolean }>`
  ${fadeIn({ time: '1.5s' })}
  font-weight: 500;
  ${(props) => props.fill && `background: var(--${props.color})`};
`;
