/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import '../public/rem';
// import Comm from '@common/components';
import Canvas from './page/canvas';
// import { Button } from 'yyyyjinying-button-test';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ZButton = require('z-jinying-test');
import './style.less';
// import "./tapable";
// import Car from "./car.jpg";

// const Img = new Image();
// Img.src = Car;

// document.body.appendChild(Img);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sub = React.createElement('h1', { id: 'zhao', title: '一个子节点' }, '标题文本01');
// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  emitFn(params, num) {
    console.log('emitfn', num, params);
    this.setState((state) => {
      return { num: ++state.num };
    });
  }
  render() {
    console.log('用户代理: ' + navigator.userAgent);

    return (
      <div>
        {/* iphone */}
        {/* <Comm /> */}
        <ZButton />
        {/* <z-button color="blur">按钮</z-button> */}
        <Canvas />
        {/* {sub} */}
        {/* <window.other.default num={this.state.num} emitFn={this.emitFn.bind(this)} /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
