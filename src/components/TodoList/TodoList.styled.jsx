import styled from '@emotion/styled';
export const Todo = styled.ul`
  width: 400px;
`;

export const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 2px;
`;
export const TodoListText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`;
export const BtnDelete = styled.button`
  background-color: #6550e8;
  border-radius: 2px;
  color: #fff;
  height: 30px;
  border: none;
  cursor: pointer;
`;
