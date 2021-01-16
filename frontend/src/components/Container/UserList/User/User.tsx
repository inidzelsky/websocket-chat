import React from 'react';

import { UserType } from '../../../../types';

import './User.css';

const User: React.FC<UserType> = ({ image, name, status, isActive }) => {
  const classNames = isActive ? 'user-card active' : 'user-card';
  const onlineSrc = isActive ? 'online.png' : 'offline.png';

  return (
    <div className={classNames}>
      <div className='avatar-container'>
        <img className='avatar' src={image} alt='User' />
        <img className='online' src={onlineSrc} alt=''/>
      </div>
      <div className='user-body'>
        <span className='user-name'>{name}</span>
        <span className='user-status'>{status}</span>
      </div>
    </div>
  );
};

export default User;
