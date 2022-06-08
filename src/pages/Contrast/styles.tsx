import styled from 'styled-components';

export const Caption = styled.caption`
  color: var(--gray-text);
  font-weight: 400;
  font-style: italic;
  margin-bottom: 10px;
  font-size: 1rem;
`;

export const Div = styled.div`
  width: min(90vw, 100%);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Table = styled.table`
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  box-shadow: var(--shadow);
  font-size: 1rem;
  border-collapse: separate;
  border-spacing: 5px;
  color: var(--gray-text);
  width: 400px;
  border-radius: 5px;
  /* background: var(--gray); */
  padding: 10px;
`;

export const TableName = styled.h3`
  margin-top: 40px;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  font-weight: 500;
`;

export const Tr = styled.tr`
  & > td,
  > th {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 3px;
    background: var(--white);
    text-align: center;
  }
`;
