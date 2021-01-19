import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserType } from '../../../types';

import Tabs from './Tabs/Tabs';
import User from './User/User';

import './UserList.css';

const UserList: React.FC = () => {
  const [showOnlineUsers, interlocutors] = useSelector((state: any) => [state.showOnlineUsers, state.interlocutors]);

  const displayInterlocutors = showOnlineUsers ? interlocutors.filter((i: UserType) => i.isOnline) : interlocutors;

  return (
    <div className='user-list-container'>
      <div>
        <Tabs />
        <div className='user-list'>
          {displayInterlocutors.map((u: UserType) => (
            <User
              key={interlocutors.indexOf(u)}
              avatar={u.avatar}
              username={u.username}
              status={u.status}
              isOnline={u.isOnline}
            />
          ))}
        </div>
      </div>
      <input className='user-list-search' type='text' placeholder='Search...' />
    </div>
  );
};

export default UserList;
