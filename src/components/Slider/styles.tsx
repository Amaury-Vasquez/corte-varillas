import styled from 'styled-components';

export const Slide = styled.div`
  height: 30px;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  & > span {
    color: var(--gray-text);
    font-size: 1rem;
  }
  & > :last-child {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  width: 400px;
`;

export const Name = styled.span`
  text-transform: capitalize;
  margin-right: 10px;
`;
export const Range = styled.span`
  margin-left: 10px;
`;
