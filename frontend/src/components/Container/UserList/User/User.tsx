import React from 'react';

import { UserType } from '../../../../types';

import './User.css';

const User: React.FC<UserType> = ({ avatar, username, status, isOnline = true }) => {
  const classNames = isOnline ? 'user-card active' : 'user-card';

  return (
    <div className={classNames}>
      <div className='avatar-container'>
        <img className='avatar' src={avatar} alt='User' />
        { isOnline && <img className='online' src='online.png' alt='' /> }
      </div>
      <div className='user-body'>
        <span className='user-name'>{username}</span>
        <span className='user-status'>{status}</span>
      </div>
    </div>
  );
};

export default User;
