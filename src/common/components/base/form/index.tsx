
import React from 'react';
import { Form } from 'antd';
import FormItem from './form-item';
import {Iprops} from "./type";
class AForm extends React.Component<Iprops, any> {
  constructor(props: Iprops) {
    super(props);
  }
  
  render() {
    return (
      <Form className={this.props.className} layout="inline" autoComplete={this.props.autoComplete || "off"}>
        <FormItem form={this.props.form} columns={this.props.columns} />
      </Form>
    );
  }
}

export default Form.create({
  mapPropsToFields: (props: any) => props.mapPropsToFields && props.mapPropsToFields(props),
  onValuesChange: (props: any, changedValues: any, allValues: any) => props.onValuesChange && props.onValuesChange(changedValues, allValues),
  onFieldsChange: (props: any, fields: any, allFields: any) => props.onFieldsChange && props.onFieldsChange(props, fields, allFields)
})(AForm);
