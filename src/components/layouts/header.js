import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import iLensysLogo from '../../assets/images/iLensys-logo.png';
import '../../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dropdown menu for user profile
const menu = (
  <Menu>
    <Menu.Item key="profile">
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/logout">Logout</Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={iLensysLogo} alt="iLensys-logo" className="w-75 h-100" style={{ padding: '6px 25px' }}/>
          </Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <Dropdown overlay={menu} trigger={['click']}>
                <div className="nav-link">
                  <Avatar size="small" icon={<UserOutlined />} /> Admin
                </div>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
