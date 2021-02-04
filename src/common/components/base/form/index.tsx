/// <reference path="./form-item.d.ts"/>
import * as IForm from "IForm";


import React from 'react';
import { Form } from 'antd';
import FormItem from './form-item';

class AForm extends React.Component<IForm.Iprops, any> {
  constructor(props: IForm.Iprops) {
    super(props);
  }
  render() {
    return (
      <Form className={this.props.className} layout="inline" autoComplete="off">
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
