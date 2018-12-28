import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    return <div>
        <h3>{ this.props.id }</h3>
        <img src={ this.props.imgsrc }></img>
    </div>;
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired
}