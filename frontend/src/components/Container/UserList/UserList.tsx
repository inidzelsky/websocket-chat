import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserType } from '../../../types';

import Tabs from './Tabs/Tabs';
import User from './User/User';
import Search from './Search/Search';

import './UserList.css';

const UserList: React.FC = () => {
  const [showOnlineUsers, interlocutors, bots, searchInterlocutors] = useSelector((state: any) => [
    state.interlocutors.showOnlineUsers,
    state.interlocutors.interlocutors,
    state.interlocutors.bots,
    state.interlocutors.searchInterlocutors,
  ]);

  let statusInterlocutors = showOnlineUsers ? interlocutors.filter((i: UserType) => i.isOnline) : interlocutors;
  statusInterlocutors = [...bots, ...statusInterlocutors];

  const filteredInterlocutors = [searchInterlocutors]
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
