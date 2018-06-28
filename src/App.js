import React, { Component } from 'react';
import Input, { LogPropsInput } from './components/input';

class App extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.inputRefHOC = React.createRef();
  }
  componentDidMount() {
    this.inputRefHOC.current.focus();
  }

  render() {
    return (
      <div className="App">
        <h2>
          Forwarding refs
        </h2>
        <Input ref={this.inputRef}/>
        <LogPropsInput ref={this.inputRefHOC}/>
      </div>
    );
  }
}

export default App;
