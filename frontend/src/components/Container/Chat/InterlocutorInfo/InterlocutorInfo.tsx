import React from 'react';

import { UserType } from '../../../../types';

import './InterlocutorInfo.css';

type InterlocutorInfoProps = Pick<UserType, 'avatar' | 'username' | 'status'>;

const InterlocutorInfo: React.FC<InterlocutorInfoProps> = ({ avatar, username, status }) => {
  return (
    <div className='interlocutor-info-container'>
      <img className='avatar' src={avatar} alt='Interlocutor' />
      <div className='interlocutor-info-body'>
        <span className='interlocutor-name'>{username}</span>
        <span className='interlocutor-status'>{status}</span>
      </div>
    </div>
  );
};

export default InterlocutorInfo;
