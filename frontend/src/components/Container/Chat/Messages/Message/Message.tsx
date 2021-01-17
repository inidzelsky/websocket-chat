import React from 'react';

import { MessageType } from '../../../../../types';

import './Message.css';

const Message: React.FC<MessageType> = ({ username, date, text }) => {
  const parseDate: (date: Date) => string = (date: Date) => {
    return date.toLocaleString('eu-UA', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const messageClasses = username === 'Username' ? 'message user-message' : 'message interlocutor-message';

  return (
    <div className={messageClasses}>
      <div className='message-header'>
        <span className='username'>{username}</span>
        <span className='date'>{parseDate(date)}</span>
      </div>
      <div className='message-body'>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Message;
