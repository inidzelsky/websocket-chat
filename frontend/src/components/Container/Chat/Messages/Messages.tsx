import React from 'react';

import { MessageType } from '../../../../types';

import Message from './Message/Message';

import './Messages.css';

const Messages: React.FC = () => {
  const messages: Array<MessageType> = [
    {
      username: 'Reverse bot',
      date: new Date(),
      text: 'Hello, World!',
    },
    {
      username: 'Username',
      date: new Date(),
      text:
        'Hello robotsdfghjkl;mlkjhgvcfdsdrtfghbjnkmlkjhgfdswerdtfyghjklkjhgfdsadrt][poiuytrfygewfhdjgdfhjgbhdbghbghhsduGHDUSHGFUDLHGYFDSAGNJKSDNGJSALBDGHBSADHGBHSDGBHSDLBGHBDSGHJBDSHDFKJNSJFNJSDNFDKDFMKDMFM',
    },
    {
      username: 'Reverse bot',
      date: new Date(),
      text: 'Hello, World!',
    },
    {
      username: 'Username',
      date: new Date(),
      text:
        'Hello robotsdfghjkl;mlkjhgvcfdsdrtfghbjnkmlkjhgfdswerdtfyghjklkjhgfdsadrt][poiuytrfygewfhdjgdfhjgbhdbghbghhsduGHDUSHGFUDLHGYFDSAGNJKSDNGJSALBDGHBSADHGBHSDGBHSDLBGHBDSGHJBDSHDFKJNSJFNJSDNFDKDFMKDMFM',
    },
  ];

  return (
    <div className='message-list'>
      {messages.map((m) => (
        <Message key={messages.indexOf(m)} username={m.username} date={m.date} text={m.text} />
      ))}
    </div>
  );
};

export default Messages;
