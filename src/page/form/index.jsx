import React from 'react';
import { Button } from 'antd';
import { Form } from 'r-form-antd';
import { columnRefs } from './columnRefs';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        select: 'bb',
        num: 232,
      },
    };
  }
  render() {
    return (
      <div>
        <Button>fdf</Button>
        <Form
          className="z-form"
          // // mapPropsToFields={this.mapPropsToFields.bind(this)}
          // // onValuesChange={this.onValuesChange.bind(this)}
          columns={columnRefs.call(this)}
        />
      </div>
    );
  }
}
export default Index;
