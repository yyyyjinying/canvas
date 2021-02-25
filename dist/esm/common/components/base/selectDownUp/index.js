/* eslint-disable react/prop-types */
import React from 'react';
import { Dropdown, Menu } from 'antd';
import './style.less';
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    onCurTrigger(record) {
        this.props.onCurTrigger(record);
    }
    _getItemMenu(list = []) {
        return list.map((item) => {
            if (Array.isArray(item.children) && item.children.length > 0) {
                return (React.createElement(Menu.SubMenu, { key: item.key, title: this._getItem(item) }, this._getItemMenu(item.children)));
            }
        });
    }
    _getItem(item) {
        return React.createElement("span", null, item[this.props.keyName]);
    }
    render() {
        return (React.createElement(Dropdown, { trigger: this.props.trigger, disabled: this.props.disabled, getPopupContainer: (triggerNode) => triggerNode.parentNode, className: "z-downup-menu", overlay: () => React.createElement(Menu, null, this._getItemMenu(this.props.downUpOption)) }, this.props.children));
    }
}
Index.defaultProps = {
    children: null,
    trigger: ['click'],
    keyName: 'title',
    disabled: false,
    onCurTrigger: () => { },
    downUpOption: [{ value: 13, title: 'aa', children: [{ value: 14, title: 'bb' }] }],
};
export default Index;
