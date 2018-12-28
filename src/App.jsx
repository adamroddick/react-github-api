import React from 'react';
import ReactDOM from 'react-dom';
// import Message from './Message.jsx';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Message:</p>
//         <Message message='Hello React'></Message>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metal: 0,
      wood: 0,
  };

  this.metalCounter = (incrementValue) => {
    this.setState((prevState) => ({
      metal: prevState.metal + incrementValue
    }));
  };

  this.woodCounter = (incrementValue) => {
    this.setState((prevState) => ({
      wood: prevState.wood + incrementValue
    }));
  };

  }
     
  render() {
    var div = 
      <div>
        <Card incrementValue={1} onClickFunction={this.metalCounter} counter={this.state.metal} resource="metal"/>
        <Card incrementValue={10} onClickFunction={this.metalCounter} counter={this.state.metal} resource="metal"/>
        <Card incrementValue={100} onClickFunction={this.metalCounter} counter={this.state.metal} resource="metal"/>
        <Result counter={this.state.metal} resource="metal"/>
        
        <Card incrementValue={1} onClickFunction={this.woodCounter} counter={this.state.wood} resource="wood"/>
        <Card incrementValue={10} onClickFunction={this.woodCounter} counter={this.state.wood} resource="wood"/>
        <Card incrementValue={100} onClickFunction={this.woodCounter} counter={this.state.wood} resource="wood"/>
        <Result counter={this.state.wood} resource="wood"/>
      </div>
    return div;
  }
}

class Result extends React.Component {
    render() {
      return (
        <div>{this.props.resource}: {this.props.counter}</div>
    )
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    };

  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.resource} +{this.props.incrementValue}
      </button>
    );
  }
}

const root = document.querySelector('div#root');
ReactDOM.render(<App />, root);

ReactDOM.render(<App />, document.querySelector('#content'));
