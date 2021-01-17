import React, { useState } from 'react';

import { UserType } from '../../../types';

import Tabs from './Tabs/Tabs';
import User from './User/User';

import './UserList.css';

const UserList: React.FC = () => {
  const users: Array<UserType> = [
    {
      image: 'echobot.png',
      name: 'Echo bot',
      status: 'Who am I? Who are you? What are you doing here? Go away! Blah-blah-blah-blah-blah',
      isActive: false,
    },
    { image: 'reversebot.png', name: 'Reverse bot', status: 'Dos', isActive: true },
    { image: 'spambot.png', name: 'Spam bot', status: 'Tres', isActive: false },
    { image: 'ignorebot.png', name: 'Ignore bot', status: 'Quadro', isActive: false },
  ];

  return (
    <div className='user-list-container'>
      <div>
        <Tabs />
        <div className='user-list'>
          {users.map((u: UserType) => (
            <User key={users.indexOf(u)} image={u.image} name={u.name} status={u.status} isActive={u.isActive} />
          ))}
        </div>
      </div>
      <input className='user-list-search' type='text' placeholder='Search...' />
    </div>
  );
};

export default UserList;
