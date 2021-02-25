import React from 'react';
import { Form } from 'antd';
import FormItem from './form-item';
class AForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Form, { className: this.props.className, layout: "inline", autoComplete: this.props.autoComplete || "off" },
            React.createElement(FormItem, { form: this.props.form, columns: this.props.columns })));
    }
}
export default Form.create({
    mapPropsToFields: (props) => props.mapPropsToFields && props.mapPropsToFields(props),
    onValuesChange: (props, changedValues, allValues) => props.onValuesChange && props.onValuesChange(changedValues, allValues),
    onFieldsChange: (props, fields, allFields) => props.onFieldsChange && props.onFieldsChange(props, fields, allFields)
})(AForm);
//# sourceMappingURL=index.js.map