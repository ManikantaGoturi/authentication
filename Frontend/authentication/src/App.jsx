import React, { useState } from 'react'
import Register_file from './components/register/Register_file'
import Login_file from './components/login/Login_file'
import Navbar from './components/crmdashboard/Navbar';
import Sidebar from './components/crmdashboard/Sidebar';
import Employee from './components/crmdashboard/Employee';
import Dashboard from './components/crmdashboard/Dashboard';
import { Routes, Route,useLocation } from 'react-router-dom';
import Reports from './components/crmdashboard/Reports';
import Settings from './components/crmdashboard/Settings';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const handleSearch = (value) =>{
    setSearchValue(value);
  }

  const fullPageRoutes = ['/','/login'];
  const isFullPage = fullPageRoutes.includes(location.pathname);

  if(isFullPage){
    return(
      <Routes>
        <Route path="/" element={<Register_file/>}/>
        <Route path="/login" element={<Login_file/>}/>
      </Routes>
    );
  }

  return (
     <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar onSearch={handleSearch}/>
        <div className="p-4 md:p-6 bg-gray-50 flex-1">
          <Routes>
            <Route path="/employee" element={<Employee searchValue={searchValue}/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Reports/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
