import { Todo, TodoListItem, TodoListText, BtnDelete } from './TodoList.styled';
export const TodoList = ({ todos, onDeleteTodo }) => (
  <Todo>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id}>
        <TodoListText>{text}</TodoListText>
        <BtnDelete type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </BtnDelete>
      </TodoListItem>
    ))}
  </Todo>
);
