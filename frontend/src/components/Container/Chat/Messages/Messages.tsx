import React from 'react';
import { useSelector } from 'react-redux';

import Message from './Message/Message';

import './Messages.css';
import { MessageType } from '../../../../types';

const Messages: React.FC = () => {
  const [messages, currentInterlocutor] = useSelector((state: any) => [state.messages, state.currentInterlocutor]);

  const filteredMessages = messages.filter(
    (message: any) =>
      message.sender === currentInterlocutor.username || message.receiver === currentInterlocutor.username,
  );

  return (
    <div className='message-list'>
      {filteredMessages.map((m: MessageType) => (
        <Message key={filteredMessages.indexOf(m)} sender={m.sender} sendTime={m.sendTime} content={m.content} />
      ))}
    </div>
  );
};

export default Messages;
