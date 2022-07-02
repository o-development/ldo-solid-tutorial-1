import React, { useEffect, useState } from 'react';
import {
  handleIncomingRedirect,
  ISessionInfo
} from '@inrupt/solid-client-authn-browser'
import LoginHeader from './LoginHeader';
import ProfilePanel from './ProfilePanel';

function App() {
  const [sessionInfo, setSessionInfo] = useState<ISessionInfo | undefined>();
  useEffect(() => {
    handleIncomingRedirect().then((sessionInfo) => {
      setSessionInfo(sessionInfo);
    });
  }, []);

  return (
    <div className="App">
      <h1>Solid LDO Tutorial</h1>
      <LoginHeader sessionInfo={sessionInfo} />
      {sessionInfo?.isLoggedIn && <ProfilePanel />}
    </div>
  );
}

export default App;
