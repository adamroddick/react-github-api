import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import Card from './Card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <div>
          <Message message='Hello React'></Message>
        </div>
        <div>
          <Card id='card1'></Card>
        </div>
      </div>
    );
  }
}

const root = document.querySelector('div#root');
ReactDOM.render(<App />, root);
