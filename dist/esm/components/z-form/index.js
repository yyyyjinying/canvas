import React from 'react';
import Form from '@common/components/base/form';
import { columnRefs } from './columnRefs';
class ZForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: {
                num: 123,
                select: "a"
            },
        };
    }
    onValuesChange(a, b) {
        console.log(a, b);
    }
    mapPropsToFields() { }
    render() {
        return (React.createElement(Form
        // className="z-form"
        // // mapPropsToFields={this.mapPropsToFields.bind(this)}
        , { 
            // className="z-form"
            // // mapPropsToFields={this.mapPropsToFields.bind(this)}
            onValuesChange: this.onValuesChange.bind(this), columns: columnRefs.call(this) }));
    }
}
export default ZForm;
//# sourceMappingURL=index.js.map