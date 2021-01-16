import React from 'react';

import { UserType } from '../../../../types';

import './InterlocutorInfo.css';

type InterlocutorInfoProps = Pick<UserType, 'image' | 'name' | 'status'>;

const InterlocutorInfo: React.FC<InterlocutorInfoProps> = ({ image, name, status }) => {
  return (
    <div className='interlocutor-info-container'>
      <img className='avatar' src={image} alt='Interlocutor'/>
      <div className='interlocutor-info-body'>
        <span className='interlocutor-name'>{name}</span>
        <span className='interlocutor-status'>{status}</span>
      </div>
    </div>
  );
};

export default InterlocutorInfo;
