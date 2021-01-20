import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './InputMessage.css';
import { UserType } from '../../../../types';

const InputMessage: React.FC = () => {
  const [socketClient, currentInterlocutor, bots] = useSelector((state: any) => [
    state.socketClient,
    state.currentInterlocutor,
    state.bots,
  ]);
  const [content, setContent] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (!content) return;

    const sender = localStorage.getItem('username');
    const receiver = currentInterlocutor.username;
    const toBot = bots.find((bot: UserType) => bot.username === receiver) ? true : false;

    socketClient.sendMessage({ sender, receiver, content }, toBot);

    setContent('');
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div className='input-message'>
      <input type='text' placeholder='Start chatting!' value={content} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>Send message</button>
    </div>
  );
};

export default InputMessage;
