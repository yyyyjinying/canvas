import React from 'react';
import { Iprops } from "./type";
declare class AForm extends React.Component<Iprops, any> {
    constructor(props: Iprops);
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<typeof AForm, Pick<any, string | number | symbol>>;
export default _default;
