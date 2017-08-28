import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PCIndex from '../components/pc_index.js';

class APP extends Component {
  render() {
    return (
      <div>
        <PCIndex></PCIndex>
      </div>
    );
  }
}

ReactDOM.render( <APP / > , document.querySelector('#app'));
