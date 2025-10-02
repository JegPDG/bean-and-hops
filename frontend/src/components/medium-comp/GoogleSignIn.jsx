import React, { useEffect, useRef } from 'react'
import { useAuth } from '../../context/AuthContext'

const GoogleSignIn = () => {
  const { login, isAuthenticated, user, logout } = useAuth();
  const googleButtonRef = useRef(null);
  const isInitialized = useRef(false);

  // ✅ useEffect is at the component level, not inside a function
  useEffect(() => {
    // Don't initialize if already authenticated
    if (isAuthenticated) return;

    // Function to check and initialize Google
    const checkAndInitGoogle = () => {
      if (window.google && googleButtonRef.current && !isInitialized.current) {
        console.log('✅ Google script loaded, initializing...');
        initializeGoogleSignIn();
        isInitialized.current = true;
      } else if (!window.google) {
        console.log('⏳ Waiting for Google script to load...');
      }
    };

    // Check immediately
    checkAndInitGoogle();

    // If not loaded, check periodically
    const interval = setInterval(() => {
      if (window.google && !isInitialized.current) {
        checkAndInitGoogle();
        clearInterval(interval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(interval);
  }, [isAuthenticated]); // Re-run when auth state changes

  // ✅ Initialize Google Sign-In
  const initializeGoogleSignIn = () => {
    try {
      console.log('🔧 Initializing Google Sign-In...');
      console.log('Client ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);

      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_prompt: false,
      });

      // ✅ Render button immediately after initializing
      if (googleButtonRef.current) {
        console.log('🎨 Rendering Google button...');
        window.google.accounts.id.renderButton(
          googleButtonRef.current,
          {
            type: 'standard',
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            shape: 'rectangular',
            theme: 'filled_black'
          }
        );
        console.log('✅ Google button rendered!');
      }
    } catch (error) {
      console.error('❌ Error initializing Google Sign-In:', error);
    }
  };

  // ✅ Handle Google authentication response
  const handleCredentialResponse = async (response) => {
    console.log('🔐 Google credential received');
    const result = await login(response.credential);
    if (!result.success) {
      alert('Authentication failed: ' + result.error);
    } else {
      console.log('✅ Login successful!');
    }
  };

  // ✅ Handle logout
  const handleLogout = async () => {
    await logout();
    isInitialized.current = false; // Reset initialization flag
    // Re-initialize Google button after logout
    setTimeout(() => {
      if (window.google && googleButtonRef.current) {
        initializeGoogleSignIn();
      }
    }, 100);
  };

  // ✅ Show user info if authenticated
  if (isAuthenticated) {
    return (
      <div className="user-info bg-bg-dark-400 p-4 rounded-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {user?.picture && (
              <img 
                src={user.picture} 
                alt="Profile" 
                className="w-10 h-10 rounded-full"
              />
            )}
            <span className="font-medium">
              Welcome, {user?.first_name || user?.email}!
            </span>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
  
  // ✅ Show Google Sign-In button
  return (
    <div >
      <div ref={googleButtonRef} className="flex justify-center mt-3"></div>
      {/* Debug info - remove this after testing */}
      <div className="mt-2 text-xs text-white/50">
        {!window.google && <p>⏳ Loading Google...</p>}
      </div>
    </div>
  );
}

export default GoogleSignIn