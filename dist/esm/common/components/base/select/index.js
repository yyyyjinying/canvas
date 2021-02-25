import React from 'react';
import { Icon, Select, Tooltip } from 'antd';
import './style.less';
class ESelect extends React.Compoent {
    render() {
        let { curColumn, record, options, keyToName, style, text, width, props } = this.props;
        const disabled = (props && props.disabled) || false;
        const allowClear = (props && props.allowClear) || true;
        width = width || 140;
        style = style || {};
        const getTip = () => {
            let visible = curColumn.toolTip.visible || false;
            if (visible && record.rule) {
                const rule = record.rule.find((item) => item.dataIndex === curColumn.dataIndex);
                if (rule) {
                    return (React.createElement(Tooltip, null,
                        React.createElement(Icon, { className: "base-icon-error", type: "exclamation-circle" })));
                }
                return null;
            }
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(Select, { className: "base-select", allowClear: allowClear, onSearch: (value) => this.props.onSearch && this.porps.onSearch(value), onSelect: (value, itemOption) => this.props.onSelect && this.porps.onSelect(value, itemOption), onChange: (value, itemOption) => {
                    const itemOptions = itemOption && itemOption.props;
                    this.props.onChange && this.porps.onChange(value, itemOptions);
                }, style: Object.assign({ width }, style), defaultValue: text, disabled: disabled }, options &&
                options.map((itemOptions, index) => {
                    return (React.createElement(Select.Option, { key: index, value: itemOptions[keyToName.value] }, itemOptions[keyToName.name]));
                })),
            getTip()));
    }
}
export default ESelect;
//# sourceMappingURL=index.js.map