import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
const Style = require("./hello.scss")
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div className={Style.hello}>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
          qwqweqwee
        </h1>
      </div>
    );
  }
}
