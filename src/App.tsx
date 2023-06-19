import { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

import './index.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random(), text}]);
  }

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}/>
    </>
  )
}

export default App
