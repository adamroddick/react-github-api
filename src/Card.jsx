import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    return <div id={ this.props.id }>Some card.</div>;
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired
}