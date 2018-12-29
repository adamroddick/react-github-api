import React from 'react';
import ReactDOM from 'react-dom';
// import Message from './Message.jsx';
import Card from './Card.jsx';
import Form from './Form.jsx';

const root = document.querySelector('div#root');

var fml = {}

const CardList = (props) => {
    return (
      <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class App extends React.Component {
  state = {
    data: []
  }

  createCard = (json) => {
    json.key = json.id // to satisfy Reacts requirement for a unique key
    this.setState(prevState => ({
      data: prevState.data.concat(json)
    }))
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.createCard}/>
        <CardList cards={this.state.data}/>
      </div>
    )
  }
}

//ReactDOM.render(<App cards={data}/>, root);
ReactDOM.render(<App />, root);
