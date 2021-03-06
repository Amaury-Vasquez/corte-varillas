import styled from 'styled-components';

export const Div = styled.div`
  height: auto;
  width: auto;
  margin: 0 auto;
  margin-top: 20px;
  & > :first-child {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  font-size: 1rem;
  color: var(--gray-text);
  font-weight: 500;
  font-style: italic;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
