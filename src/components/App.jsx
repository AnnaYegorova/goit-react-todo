import { Component } from 'react';
// import { Form } from '../components/Form/Form';
import { TodoBoard, TodoTotalAmount } from './App.styled';
import { TodoList } from '../components/TodoList';
import { TodoEditor } from '../components/TodoEditor';
import initialTodos from './TodoList/todo.json';
import shortid from 'shortid';
import { Filter } from '../components/Filter/Filter';
export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };
  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
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
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}
