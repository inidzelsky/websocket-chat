import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './InputMessage.css';

const InputMessage: React.FC = () => {
  const [socketClient, currentInterlocutor] = useSelector((state: any) => [
    state.socketClient,
    state.currentInterlocutor,
  ]);
  const [content, setContent] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (!content) return;

    const sender = localStorage.getItem('username');
    const receiver = currentInterlocutor.username;
    socketClient.sendMessage({ sender, receiver, content });

    setContent('');
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div className='input-message'>
      <input type='text' placeholder='Start chatting!' value={content} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>Send message</button>
    </div>
  );
};

export default InputMessage;
