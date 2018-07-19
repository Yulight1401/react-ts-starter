import * as React from 'react';

interface Linkprops {
  active: boolean;
  children: object;
  onClick: (e: React.MouseEvent) => void;
}

const link: React.StatelessComponent = ({
  active,
  children,
  onClick,
}: Linkprops): React.ReactElement<any> => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  );
};

export default link;
