/* eslint-disable react/prop-types */
import React from 'react';
import './style.less';
function NoData(props) {
    return (React.createElement("div", { className: "no-data" },
        React.createElement("img", { src: "", alt: "", className: "no-img" }),
        React.createElement("span", { className: "no-title" }, props.emptyTitle || '暂无数据')));
}
export default NoData;
