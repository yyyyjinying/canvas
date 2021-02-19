// React.ReactNode JSX.Element  React.CSSProperties
interface CItem {
  title: string;
  dataIndex: string;
  props: any;
  decorator: any;
  type: string;
  ele?: (item?: CItem, getFieldDecorator?: any) => JSX.Element;
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
  startChildren?: (item?: CItem, getFieldDecorator?: any) => JSX.Element;
  endChildren?: (item?: CItem, getFieldDecorator?: any) => JSX.Element;
  children?: (item?: CItem, getFieldDecorator?: any) => JSX.Element;
}
interface Icolumns {
  form: any;
  columns: CItem[];
}

declare module 'IForm' {
  export interface Iprops extends Icolumns {
    autoComplete?: string;
    className?: string;
    onValuesChange?: (props?: any, changedValues?: any, allValues?: any) => void;
    mapPropsToFields?: (props?: any) => void;
    onFieldsChange?: (props: any, fields: any, allFields: any) => void;
  }
}

declare module 'IFormitem' {
  export interface Iitem extends CItem {}
  export interface IformItem extends Icolumns {}
}
