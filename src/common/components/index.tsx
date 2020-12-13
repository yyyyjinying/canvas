import React from 'react';
import { Button } from 'antd';
import style from './style.css';

class Index extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="bm">全局bgbgbg</div> */}
        <div className={style.bg}>bgbgbg</div>
        <Button type="primary" icon="download" size={'large'} />
        <Button>antd button</Button>
      </div>
    );
  }
}

export default Index;
