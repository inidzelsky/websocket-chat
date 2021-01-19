import React from 'react';

import { MessageType } from '../../../../../types';

import './Message.css';

const Message: React.FC<Omit<MessageType, 'receiver'>> = ({ sender, sendTime, content }) => {
  const parseDate: (date: Date) => string = (date: Date) => {
    return date.toLocaleString('eu-UA', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const userUsername = localStorage.getItem('username');
  const messageClasses = sender === userUsername ? 'message user-message' : 'message interlocutor-message';

  return (
    <div className={messageClasses}>
      <div className='message-header'>
        <span className='username'>{sender}</span>
        <span className='date'>{parseDate(sendTime)}</span>
      </div>
      <div className='message-body'>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Message;
