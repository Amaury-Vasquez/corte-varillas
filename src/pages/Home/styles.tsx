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
