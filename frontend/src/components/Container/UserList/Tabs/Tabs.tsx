import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowOnlineUsers } from '../../../../redux/actions';

import './Tabs.css';

const Tabs: React.FC = () => {
  const dispatch = useDispatch();
  const showOnlineUsers = useSelector((state: any) => state.showOnlineUsers);

  const onlineClasses = showOnlineUsers ? 'user-list-tab' : 'user-list-tab nonactive';
  const allClasses = showOnlineUsers ? 'user-list-tab nonactive' : 'user-list-tab';

  return (
    <div className='user-list-tabs'>
      <div className={onlineClasses} onClick={() => dispatch(setShowOnlineUsers(true))}>
        Online
      </div>
      <div className={allClasses} onClick={() => dispatch(setShowOnlineUsers(false))}>
        All
      </div>
    </div>
  );
};

export default Tabs;
