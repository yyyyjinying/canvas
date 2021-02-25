export default Index;
declare class Index extends React.Component<any, any, any> {
    static defaultProps: {
        children: any;
        trigger: string[];
        keyName: string;
        disabled: boolean;
        onCurTrigger: () => void;
        downUpOption: {
            value: number;
            title: string;
            children: {
                value: number;
                title: string;
            }[];
        }[];
    };
    constructor(props: any);
    onCurTrigger(record: any): void;
    _getItemMenu(list?: any[]): JSX.Element[];
    _getItem(item: any): JSX.Element;
}
import React from "react";
