import React from 'react';
import { useSelector } from 'react-redux';

import InterlocutorInfo from './InterlocutorInfo/InterlocutorInfo';
import Messages from './Messages/Messages';
import InputMessage from './InputMessage/InputMessage';

import './Chat.css';

const Chat: React.FC = () => {
  const interlocutor = useSelector((state: any) => state.interlocutors.currentInterlocutor);

  return (
    <div className='chat'>
      {interlocutor && (
        <>
          <InterlocutorInfo
            username={interlocutor.username}
            avatar={interlocutor.avatar}
            status={interlocutor.status}
          />
          <Messages />
          <InputMessage />
        </>
      )}
    </div>
  );
};

export default Chat;
