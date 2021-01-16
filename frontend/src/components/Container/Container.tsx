import React from 'react';

import Chat from './Chat/Chat';
import UserList from './UserList/UserList';

import './Container.css';

const Container: React.FC = () => {
  return (
    <div className="container">
      <Chat />
      <UserList />
    </div>
  );
};

export default Container;
