import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';
import TodoList from '../components/TodoList';
import { Dispatch } from '../../node_modules/redux';

interface todo {
  completed: boolean;
}

const getVisibleTodos = (todos: todo[], filter: string) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t) => {
        return t.completed;
      });
    case 'SHOW_ACTIVE':
      return todos.filter((t) => {
        return !t.completed;
      });
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    },
  };
};

const visibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default visibleTodoList;
