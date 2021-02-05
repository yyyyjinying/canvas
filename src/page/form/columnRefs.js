/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { COLUMN_TYPE } from '@common/dictionary';
const SPAN = 8;

function columnRefs() {
  const column = [
    {
      title: '国航编码',
      dataIndex: 'num',
      type: COLUMN_TYPE.inputType,
      visible: true,
      props: {
        allowClear: true,
        disabled: false,
        placeholder: '请输入',
      },
      decorator: {
        initialValue: this.state.params.num,
        rules: [{ required: true, message: '请输入国航编码' }],
      },
    },
    {
      title: '国航编码1',
      dataIndex: 'num1',
      type: COLUMN_TYPE.inputType,
      visible: true,
      props: {
        allowClear: true,
        disabled: false,
        placeholder: '请输入',
      },
      decorator: {
        initialValue: 1,
        rules: [{ required: true, message: '请输入国航编码' }],
      },
    },
    {
      title: '日期',
      dataIndex: 'date',
      type: COLUMN_TYPE.timeType,
      visible: true,
      props: {
        allowClear: true,
        disabled: false,
        placeholder: '请输入',
      },
      decorator: {
        initialValue: null,
        rules: [{ required: true, message: '请输日期' }],
      },
    },
    {
      title: 'btnlist',
      dataIndex: 'btn',
      type: COLUMN_TYPE.eleType,
      visible: true,
      ele: () => {
        return (
          <React.Fragment>
            <label>fdf</label>
            <span>fdfdf</span>
          </React.Fragment>
        );
      },
    },
    {
      title: 'select选项',
      dataIndex: 'select',
      type: COLUMN_TYPE.selectType,
      visible: true,
      keyToName: { name: 'name', value: 'value' },
      options: [
        { name: 'zz', value: 1 },
        { name: 'aa', value: 2 },
        { name: 'bb', value: 3 },
      ],
      props: {
        allowClear: true,
        disabled: false,
        placeholder: '请输入',
      },
      decorator: {
        initialValue: this.state.params.select,
        rules: [{ required: true, message: '请输入国航编码' }],
      },
    },
  ];
  return column.map((item) => {
    item.span = item.span || SPAN;
    return item;
  });
}

export { columnRefs };
