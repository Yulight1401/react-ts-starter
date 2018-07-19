import * as React from 'react';
import Todo from './Todo';
interface Todoprops {
  id: number;
  completed: boolean;
  text: string;
}
interface TodoListprops {
  todos: Todoprops[];
  onTodoClick: (t: number) => void;
}

const todoList: React.ComponentType<TodoListprops> = (props): React.ReactElement<any> => (
  <ul>
    {props.todos.map((todo: Todoprops) => (
      <Todo key={todo.id} {...todo} onClick={() => props.onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default todoList;
