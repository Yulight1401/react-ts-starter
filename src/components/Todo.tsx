import * as React from 'react';
interface Todoprops {
  onClick: (event: object) => void;
  completed: boolean;
  text: string;
}

const todo: React.StatelessComponent<Todoprops> = (props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
      }}
    >
      {props.text}
    </li>
  );
};

export default todo;
