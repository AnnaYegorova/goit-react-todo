import { Component } from 'react';

import { TodoBoard, TodoTotalAmount } from './App.styled';
import { TodoList } from '../components/TodoList';
import initialTodos from './TodoList/todo.json';
export class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <TodoBoard>
          <p>
            Общее количество:
            <TodoTotalAmount> {totalTodoCount}</TodoTotalAmount>
          </p>
          <p>
            Количество выполненных:
            <TodoTotalAmount>{completedTodoCount}</TodoTotalAmount>
          </p>
        </TodoBoard>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
