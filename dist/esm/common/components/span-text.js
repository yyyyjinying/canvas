import React from 'react';
import Input from './base/input';
import Select from './base/select';
import Basetextarea from './base-textarea';
import Radio from './radio';
import * as utils from '../../../common/utils';
const ele = (props) => {
    let value = props.width ? utils.getEllipsisValueByWidth(props.children, props.width - 20) : props.children;
    let className = props.className ? 'span_text' + props.className : 'span_text';
    return (React.createElement("span", { className: className, onClick: () => {
            props.onClick && props.onClick();
        } }, value));
};
const SpanText = (props) => {
    let dom = null;
    const displayType = (props.curColumn && props.curColumn.displayType) || null;
    switch (displayType) {
        case 'text':
            dom = React.createElement(Input, Object.assign({}, props));
            break;
        case 'select':
            dom = React.createElement(Select, Object.assign({}, props));
            break;
        case 'baseTextarea':
            dom = React.createElement(Basetextarea, Object.assign({}, props));
            break;
        case 'radio':
            dom = React.createElement(Radio, Object.assign({}, props));
            break;
        default:
            dom = ele(props);
            break;
    }
    return dom;
};
export default SpanText;
//# sourceMappingURL=span-text.js.map