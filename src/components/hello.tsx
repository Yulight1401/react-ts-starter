import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
const STYLE = require('../css/components/hello.scss');
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div className={STYLE.hello}>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
      </div>
    );
  }
}
