/// <reference types="@/common/components/base/form/form-item" />
import * as IForm from "IForm";
import React from 'react';
declare class AForm extends React.Component<IForm.Iprops, any> {
    constructor(props: IForm.Iprops);
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<typeof AForm, Pick<any, string | number | symbol>>;
export default _default;
