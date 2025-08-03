import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ login }) => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <button onClick={() => navigate(login ? '/login' : '/signup')}>
        {login ? 'Login' : 'Sign Up'}
      </button>
    </div>
  );
};

export default Header;
