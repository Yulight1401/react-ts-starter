import { ComponentType, StatelessComponent } from '../../node_modules/@types/react';

interface todo{
  text: string;
  type?: 'ADD_TODO';
  id: number;
}

let nextTodoId: number = 0;
export const addTodo = (text: string): any => {
  nextTodoId += 1;
  return {
    text,
    type: 'ADD_TODO',
    id: nextTodoId,
  };
};

export const setVisibilityFilter = (filter: string) => {
  return {
    filter,
    type: 'SET_VISIBILITY_FILTER',
  };
};

export const toggleTodo = (id: number) => {
  return {
    id,
    type: 'TOGGLE_TODO',
  };
};
