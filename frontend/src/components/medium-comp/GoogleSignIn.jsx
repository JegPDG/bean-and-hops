import React, { useEffect, useRef } from 'react'
import { useAuth } from '../../context/AuthContext'

const GoogleSignIn = () => {
  const { login, isAuthenticated, user, logout } = useAuth();
  const googleButtonRef = useRef(null);
  const isInitialized = useRef(false);

  const initializeGoogleSignIn = () => {
    window.google.accounts.id.initialize({
      client_id: process.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_prompt: false,
    });

  useEffect(() => {
      if (window.google && !isInitialized.current && !isAuthenticated) {
      initializeGoogleSignIn();
      isInitialized.current = true;
    }
  }, [isAuthenticated]);

    if (googleButtonRef.current) {
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
        }
      );
    }
  };

  const handleCredentialResponse = async (response) => {
    const result = await login(response.credential);
    if (!result.success) {
      alert('Authentication failed: ' + result.error);
    }
  };

  const handleLogout = async () => {
    await logout();
    // Re-initialize Google button after logout
    setTimeout(() => {
      if (window.google && googleButtonRef.current) {
        initializeGoogleSignIn();
      }
    }, 100);
  };

  if (isAuthenticated) {
    return (
      <div className="user-info">
        <div className="welcome-message">
          <span>Welcome, {user?.first_name || user?.email}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    );
  }
  
  
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-bg-dark-400/70 bg-opacity-50 z-50 '>
        <div className='bg-white-500 p-4 w-full max-w-[300px] text-center min-h-[200px]'>
          <p className='text-xl text-bg-dark-500 font-bold'>Sign in with Google</p>
          <div ref={googleButtonRef}></div>
        </div>
        
      </div>
    </>
  );
}

export default GoogleSignIn