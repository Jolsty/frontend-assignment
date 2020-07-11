import React from 'react';

import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

import { SearchInputProps } from '../@types/CustomTypes';

import Label from './Label';

const SearchInput: React.FC<SearchInputProps> = ({
  handleChange,
  handleClick,
  hasNextPage,
  searchParams,
}: SearchInputProps) => (
  <div className="input">
    <Input
      addonBefore={<Label text="Search by name" />}
      allowClear
      onChange={handleChange}
      value={searchParams}
      style={{ width: 450 }}
      prefix={<SearchOutlined />}
    />
    {hasNextPage && (
      <Button type="default" icon={<PlusOutlined />} onClick={handleClick}>
        Load more
      </Button>
    )}
  </div>
);
export default SearchInput;
