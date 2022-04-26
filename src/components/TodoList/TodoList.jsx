import { Todo, TodoListItem, TodoListText, BtnDelete } from './TodoList.styled';
export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <Todo>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <TodoListText>{text}</TodoListText>
        <BtnDelete type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </BtnDelete>
      </TodoListItem>
    ))}
  </Todo>
);
