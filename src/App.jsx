import React from 'react';
import ReactDOM from 'react-dom';
// import Message from './Message.jsx';
import Card from './Card.jsx';

const root = document.querySelector('div#root');

const CardList = (props) => {
    return (
      <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class Form extends React.Component {
  submitAction = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.value)

  }
  
  render() {
    return (
      <form onSubmit={this.submitAction}>
        <input ref={(input) => this.userNameInput = input} type="text" placeholder="Github username"></input>
        <button>Add</button>
      </form>
    )
  }
}

class App extends React.Component {
  state = {
    data: [
      {
        key: 1234,
        id: 'Card 1',
        imgsrc: 'http://placehold.it/100'
      },
      {
        key: 5678,
        id: 'Card 2',
        imgsrc: 'http://placehold.it/100'
      }
    ]
  }

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.data}/>
      </div>
    )
  }
}

//ReactDOM.render(<App cards={data}/>, root);
ReactDOM.render(<App />, root);
