import React from 'react';
import './button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button
      	className={this.props.className}
      	id={this.props.id}
      	onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}