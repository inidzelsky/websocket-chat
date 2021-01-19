import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserType } from '../../../../types';

import './User.css';
import { setCurrentInterlocutor } from '../../../../redux/actions';

const User: React.FC<UserType> = (user) => {
  const dispatch = useDispatch();
  const currentInterlocutor = useSelector((state: any) => state.currentInterlocutor);
  const { avatar, username, status, isOnline = true } = user;

  const classNames =
    currentInterlocutor && currentInterlocutor.username === username ? 'user-card active' : 'user-card';

  const onClick = () => dispatch(setCurrentInterlocutor(user));

  return (
    <div className={classNames} onClick={onClick}>
      <div className='avatar-container'>
        <img className='avatar' src={avatar} alt='User' />
        {isOnline && <img className='online' src='online.png' alt='' />}
      </div>
      <div className='user-body'>
        <span className='user-name'>{username}</span>
        <span className='user-status'>{status}</span>
      </div>
    </div>
  );
};

export default User;
