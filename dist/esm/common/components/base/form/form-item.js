import React from 'react';
import { Row, Col, Select, TreeSelect, Form, Checkbox, Cascader, Input, DatePicker, AutoComplete, InputNumber, } from 'antd';
import SelectDownUp from '../selectDownUp';
import { COLUMN_TYPE } from '@common/dictionary';
import './style.less';
const getInitialValue = (initialValue) => {
    if (initialValue === undefined || initialValue === null)
        return undefined;
    return initialValue;
};
const FromItem = (itemProps) => {
    const { getFieldDecorator } = itemProps.form;
    const domType = (item) => {
        const { dataIndex, props, decorator } = item;
        if (decorator)
            decorator.initialValue = getInitialValue(decorator.initialValue);
        const domObj = {
            [COLUMN_TYPE.eleType]: () => item.ele && item.ele(item, getFieldDecorator),
            [COLUMN_TYPE.autoCompleteType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(AutoComplete, Object.assign({}, Object.assign(Object.assign({}, props), { getPopupContainer: (triggerNode) => triggerNode.parentNode })))),
            [COLUMN_TYPE.numberType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(InputNumber, Object.assign({}, props))),
            [COLUMN_TYPE.textAreaType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Input.TextArea, Object.assign({}, props))),
            [COLUMN_TYPE.checkboxType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Checkbox, Object.assign({}, props))),
            [COLUMN_TYPE.inputType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Input, Object.assign({}, props))),
            [COLUMN_TYPE.timeRangeType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(DatePicker.RangePicker, Object.assign({}, props))),
            [COLUMN_TYPE.monthType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(DatePicker.MonthPicker, Object.assign({}, props))),
            [COLUMN_TYPE.timeType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(DatePicker, Object.assign({}, props))),
            [COLUMN_TYPE.selectType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Select, Object.assign({}, props), item.options &&
                item.options.map((itemOption, idx) => {
                    if (!item.keyToName)
                        throw "selectType类型字段，必须设置keyToName属性值";
                    return (React.createElement(Select.Option, { key: idx, value: itemOption[item.keyToName.value] }, itemOption[item.keyToName.name]));
                }))),
            [COLUMN_TYPE.treaSelectType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(TreeSelect, Object.assign({}, props))),
            [COLUMN_TYPE.selectDownUpType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Input, Object.assign({}, props))),
            [COLUMN_TYPE.cascaderType]: () => getFieldDecorator(dataIndex, decorator)(React.createElement(Cascader, Object.assign({}, Object.assign(Object.assign({}, props), { getPopupContainer: (triggerNode) => triggerNode.parentNode })))),
        };
        return domObj[item.type]();
    };
    return (React.createElement(Row, { className: "formItem", gutter: 24 }, itemProps.columns.map((item, index) => {
        return (item.visible && (React.createElement(Col, { span: item.span, key: index }, item.type === COLUMN_TYPE.eleType ? (React.createElement("div", { className: `ant-form-item item${item.className ? ' ' + item.className : ''}` }, domType(item))) : item.type === COLUMN_TYPE.selectDownUpType ? (React.createElement(Form.Item, { className: `item${item.className ? ' ' + item.className : ''}`, label: item.title },
            React.createElement(SelectDownUp, { disabled: item.disabled, keyName: item.keyName, trigger: item.trigger, downUpOption: item.downUpOption, onCurTrigger: item.onCurTrigger }, domType(item)))) : (React.createElement(Form.Item, { className: `item${item.className ? ' ' + item.className : ''}`, label: item.title },
            item.startChildren && item.startChildren(item, getFieldDecorator),
            domType(item),
            item.endChildren && item.endChildren(item, getFieldDecorator),
            item.children && item.children(item, getFieldDecorator))))));
    })));
};
export default FromItem;
//# sourceMappingURL=form-item.js.map