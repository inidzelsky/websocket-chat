import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserType } from '../../../types';

import Tabs from './Tabs/Tabs';
import User from './User/User';
import Search from './Search/Search';

import './UserList.css';

const UserList: React.FC = () => {
  const [showOnlineUsers, interlocutors, searchInterlocutors] = useSelector((state: any) => [
    state.showOnlineUsers,
    state.interlocutors,
    state.searchInterlocutors,
  ]);

  const statusInterlocutors = showOnlineUsers ? interlocutors.filter((i: UserType) => i.isOnline) : interlocutors;
  const filteredInterlocutors = searchInterlocutors
    ? statusInterlocutors.filter((i: UserType) => i.username.toLowerCase().includes(searchInterlocutors.toLowerCase()))
    : statusInterlocutors;

  return (
    <div className='user-list-container'>
      <div>
        <Tabs />
        <div className='user-list'>
          {filteredInterlocutors.map((u: UserType) => (
            <User
              key={filteredInterlocutors.indexOf(u)}
              avatar={u.avatar}
              username={u.username}
              status={u.status}
              isOnline={u.isOnline}
            />
          ))}
        </div>
      </div>
      <Search />
    </div>
  );
};

export default UserList;
