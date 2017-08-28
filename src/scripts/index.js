import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from '../components/index/index.js';

class APP extends Component {
  render() {
    return (
      <div>
        <Index></Index>
      </div>
    );
  }
}

ReactDOM.render( <APP / > , document.querySelector('#app'));
