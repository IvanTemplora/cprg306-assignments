import React from 'react';
import { useUserAuth } from "./_utils/auth-context";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLoginClick = async () => {
    await gitHubSignIn();
  }

  const handleLogoutClick = async () => {
    await firebaseSignOut();
  }

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogoutClick}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLoginClick}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}

export default Page;
