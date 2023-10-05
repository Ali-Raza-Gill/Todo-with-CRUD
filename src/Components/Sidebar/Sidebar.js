import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const App = () => {

  const getRandomId = () => Math.random().toString(36).slice(2)
  return (
    <>
      items={[
        {
          key: getRandomId,
          icon: <Home style={{ fontSize: "23px" }} />,
          label: <Link to='/'></Link>,
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        }
      ]}

    </>
  );
};
export default App;


