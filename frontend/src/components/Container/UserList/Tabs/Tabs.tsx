import React, { useState } from 'react';

import './Tabs.css';

const Tabs: React.FC = () => {
  const [isOnlineTab, setIsOnlineTab] = useState<boolean>(true);

  const onlineClasses = isOnlineTab ? 'user-list-tab' : 'user-list-tab nonactive';
  const activeClasses = isOnlineTab ? 'user-list-tab nonactive' : 'user-list-tab';

  return (
    <div className='user-list-tabs'>
      <div className={onlineClasses} onClick={() => setIsOnlineTab(true)}>
        Online
      </div>
      <div className={activeClasses} onClick={() => setIsOnlineTab(false)}>
        All
      </div>
    </div>
  );
};

export default Tabs;
