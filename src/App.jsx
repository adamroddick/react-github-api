import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import Card from './Card.jsx';

const root = document.querySelector('div#root');

let data = [
  {
    key: 1234, // the key prop gives React a unique, immutable identifier of this object in the array
    id: 'Card 1',
    imgsrc: 'http://placehold.it/75'
  },
  {
    key: 5678,
    id: 'Card 2',
    imgsrc: 'http://placehold.it/100'
  }
]

const CardList = (props) => {
    return (
      <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
}

//ReactDOM.render(<App cards={data}/>, root);
ReactDOM.render(<CardList cards={data}/>, root);
