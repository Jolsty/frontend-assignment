import React from 'react';

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer: React.FC = () => (
  <footer>
    <a
      href="https://github.com/Jolsty/frontend-assignment"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubOutlined style={{ fontSize: '35px' }} />
    </a>
    <a href="https://www.linkedin.com/in/andrei-ciulpan" target="_blank" rel="noopener noreferrer">
      <LinkedinOutlined style={{ fontSize: '35px' }} />
    </a>
  </footer>
);

export default Footer;
