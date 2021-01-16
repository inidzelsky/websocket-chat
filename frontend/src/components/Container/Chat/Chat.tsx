import React from 'react';

import InterlocutorInfo from './InterlocutorInfo/InterlocutorInfo';

import { UserType } from '../../../types';

import './Chat.css';

const Chat: React.FC = () => {
  const interlocutor: Pick<UserType, 'name' | 'image' | 'status'> = {
    image: 'reversebot.png',
    name: 'Reverse bot',
    status:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  };

  return (
    <div className='chat'>
      <InterlocutorInfo name={interlocutor.name} image={interlocutor.image} status={interlocutor.status} />
    </div>
  );
};

export default Chat;
