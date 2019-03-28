import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>I'm a View</div>
    )
  }

}

