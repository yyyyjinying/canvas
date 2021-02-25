import React from 'react';
import { Tooltip } from 'antd';
import './style.less';
import SpanText from '../span-text';
const AuntoTooltip = (text, record, index, curColumn) => {
    let placement = curColumn.toolTip && curColumn.toolTip.placement;
    let title = curColumn.toolTip && curColumn.toolTip.title;
    placement = placement || 'bottom';
    if (!curColumn.displayType) {
        text = curColumn.format ? curColumn.format(text) : text;
    }
    title = title || text;
    let element = React.createElement(SpanText, null, text);
    if (typeof curColumn.renderElement === 'function') {
        element = curColumn.renderElement(Object.assign({ text, curColumn, record, index }));
    }
    if (!curColumn.displayType && curColumn.toolTip && curColumn.toolTip.visible) {
        element = (React.createElement(Tooltip, Object.assign({ key: index }, { placement, title }, { overlayStyle: { maxHeight: 360, overflow: 'auto' } }),
            React.createElement("span", null, element)));
    }
    else {
        element = React.createElement("span", null, element);
    }
    return element;
};
export default AuntoTooltip;
