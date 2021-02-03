/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'yyyyjinying-button-test';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  render() {
    return (
      <div>
        <Button color="blur">按钮</Button>
        <span>zhaojinying</span>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
