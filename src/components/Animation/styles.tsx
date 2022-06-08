import styled from 'styled-components';

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

export const PriceModify = styled.div``;
