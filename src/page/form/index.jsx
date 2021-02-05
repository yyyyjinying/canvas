import React from 'react';
import { Form } from 'r-form-antd';
import { columnRefs } from './columnRefs';
class Index extends React.Component {
  render() {
    return (
      <Form // className="z-form"
        // // mapPropsToFields={this.mapPropsToFields.bind(this)}
        // // onValuesChange={this.onValuesChange.bind(this)}
        columns={columnRefs.call(this)}
      />
    );
  }
}
export default Index;
