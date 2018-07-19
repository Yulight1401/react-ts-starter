import * as React from 'react';
interface Todoprops {
  onClick: (event: object) => void;
  completed: boolean;
  text: string;
}

const todo = ({ onClick, completed, text }: Todoprops): React.ReactElement<any> => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default todo;
