import React from 'react';
import Form from '@common/components/base/form';
import { columnRefs } from './columnRefs';
class ZForm extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      params: {
        num: 123,
        select: "a"
      },
    };
  }
  onValuesChange() {}
  mapPropsToFields() {}
  render() {
    return (
      <Form
        // className="z-form"
        // // mapPropsToFields={this.mapPropsToFields.bind(this)}
        // // onValuesChange={this.onValuesChange.bind(this)}
        columns={columnRefs.call(this)}
      />
    );
  }
}

export default ZForm;
