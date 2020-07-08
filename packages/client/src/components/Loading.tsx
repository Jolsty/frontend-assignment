import React from 'react';

import { Spin } from 'antd';

const Loading: React.FC = () => (
	<div className='loading'>
		<Spin size='large' />
	</div>
);

export default Loading;
