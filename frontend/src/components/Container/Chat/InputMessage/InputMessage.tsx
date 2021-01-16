import React from 'react';

import './InputMessage.css';

const InputMessage: React.FC = () => {
  return (
    <div className='input-message'>
      <input type='text' placeholder='Start chatting!'/>
      <button>Send message</button>
    </div>
  );
};

export default InputMessage;
