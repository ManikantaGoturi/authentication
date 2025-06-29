import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className={
      (darkMode 
        ? "bg-gray-900 text-white min-h-[80vh] transition-colors duration-300 p-5" 
        : "bg-white text-gray-900 min-h-[80vh] transition-colors duration-300 p-5"
      )
    }>
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-indigo-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.01c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.01 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.01 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.01c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.01c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.01-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.01-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.01z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        Setting
      </h1>
      <div>
        <h2 className="mb-2 font-semibold">Change Background Theam:</h2>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
              darkMode ? "bg-indigo-600" : "bg-slate-300"
            }`}
            aria-pressed={darkMode}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transition-transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            ></span>
          </button>
          <span className="ml-2">{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
        <h2 className="mb-2 font-semibold">Email Alerts</h2>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setEmailAlert(!emailAlert)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
              emailAlert ? "bg-indigo-600" : "bg-slate-300"
            }`}
            aria-pressed={emailAlert}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transition-transform duration-300 ${
                emailAlert ? "translate-x-6" : ""
              }`}
            ></span>
          </button>
          <span className="ml-2">{emailAlert ? "Email Alerts On" : "Email Alerts Off"}</span>
        </div>
        <h2 className="mb-2 font-semibold">Notifications</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
              notifications ? "bg-indigo-600" : "bg-slate-300"
            }`}
            aria-pressed={notifications}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transition-transform duration-300 ${
                notifications ? "translate-x-6" : ""
              }`}
            ></span>
          </button>
          <span className="ml-2">{notifications ? "Notifications On" : "Notifications Off"}</span>
        </div>
      </div>
    </div>
  );
};


export default Settings;