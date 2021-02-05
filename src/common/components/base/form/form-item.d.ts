// React.ReactNode JSX.Element  React.CSSProperties
interface item {
  title: string;
  dataIndex: string;
  props: any;
  decorator: any;
  type: string;
  ele?: (item?: item, getFieldDecorator?: any) => JSX.Element;
  options?: any[];
  keyToName?: { value: string | number; name: string | number };
  visible?: boolean;
  span?: string | number | undefined;
  className?: string;
  disabled?: boolean;
  keyName?: string;
  trigger?: any;
  downUpOption?: any;
  onCurTrigger?: any;
  startChildren?: (item?: item, getFieldDecorator?: any) => JSX.Element;
  endChildren?: (item?: item, getFieldDecorator?: any) => JSX.Element;
  children?: (item?: item, getFieldDecorator?: any) => JSX.Element;
}

declare module 'IForm' {
  export interface Iprops {
    form: any;
    className?: string;
    columns: item[];
    onValuesChange?: (props?: any, changedValues?: any, allValues?: any) => void;
    mapPropsToFields?: (props?: any) => void;
    onFieldsChange: (props: any, fields: any, allFields: any) => void;
  }
}

declare module 'IFormitem' {
  export interface Iitem extends item {}
  export interface IformItem {
    form: any;
    columns: item[];
  }
}
