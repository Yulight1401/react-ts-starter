import * as React from 'react';

interface Linkprops {
  active: boolean;
  children?: object;
  onClick: () => void;
  filter: string;
}

const link: React.StatelessComponent<Linkprops> = (props) => {
  if (props.active) {
    return <span>{props.children}</span>;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </a>
  );
};

export default link;
