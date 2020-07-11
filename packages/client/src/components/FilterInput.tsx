import React from 'react';

import { Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import { FilterInputProps } from '../@types/CustomTypes';

import Label from './Label';

const FilterInput: React.FC<FilterInputProps> = ({
  filterParams,
  handleChange,
}: FilterInputProps) => (
  <div className="input">
    <Input
      addonBefore={<Label text="Filter by type" />}
      allowClear
      value={filterParams}
      onChange={handleChange}
      style={{ width: 450 }}
      prefix={<FilterOutlined />}
    />
  </div>
);
export default FilterInput;
