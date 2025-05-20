import React from 'react';

type GreetingWithClassProps = {
  name?: string;
};

export default class GreetingWithClass extends React.Component<GreetingWithClassProps> {
  constructor(props: GreetingWithClassProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  static defaultProps = {
    name: 'kyra',
  };

  render(): React.ReactNode {
    return (
      <div>
        <h1>hello {this.props.name}</h1>
        <button onClick={() => this.setState({ isLoading: false })}></button>
      </div>
    );
  }
}
