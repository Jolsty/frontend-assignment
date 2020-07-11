import React from 'react';

import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

import { SearchFormProps } from '../@types/CustomTypes';

const SearchInput: React.FC<SearchFormProps> = ({
  handleChange,
  handleClick,
  hasNextPage,
}: SearchFormProps) => (
  <div className="search-input">
    <Input
      addonBefore="Search"
      allowClear
      onChange={handleChange}
      style={{ width: 400 }}
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
