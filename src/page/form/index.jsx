import React from 'react';
import { Button } from 'antd';
import { Form, COLUMN_TYPE } from 'r-form-antd';
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
          columns={columnRefs.call(this, COLUMN_TYPE)}
          // // mapPropsToFields={this.mapPropsToFields.bind(this)}
          // // onValuesChange={this.onValuesChange.bind(this)}
        />
      </div>
    );
  }
}
export default Index;
