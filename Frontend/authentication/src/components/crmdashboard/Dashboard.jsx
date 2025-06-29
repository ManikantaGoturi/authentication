import React, { useState, useEffect } from 'react';

const base_url = 'http://localhost:8080/api';

const Dashboard = () => {
  const [counts, setCounts] = useState({
    total: 0,
    developers: 0,
    managers: 0,
    sales: 0,
  });

  useEffect(() => {
    fetch(`${base_url}/allemployee`)
      .then(res => res.json())
      .then(data => {
        const total = data.length;
        const developers = data.filter(emp => emp.role?.toLowerCase() === "developer").length;
        const managers = data.filter(emp => emp.role?.toLowerCase() === "manager").length;
        const sales = data.filter(emp => emp.role?.toLowerCase() === "sales").length;

        setCounts({ total, developers, managers, sales });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-bold">Total Employees</h2>
          <p className="text-2xl">{counts.total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-bold">Developers</h2>
          <p className="text-2xl">{counts.developers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-bold">Managers</h2>
          <p className="text-2xl">{counts.managers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-bold">Sales</h2>
          <p className="text-2xl">{counts.sales}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <div className="bg-white p-4 rounded shadow text-center w-full max-w-xs mx-auto mt-0">
            <h2 className="text-lg font-bold">Company Revenue</h2>
            <p className="text-2xl">$25,000</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow w-full max-w-xs mx-auto mt-2 text-left">
            <h2 className="text-lg font-bold mb-2">CSR Activities</h2>
            <ul className="space-y-2">
              <li className="flex items-start bg-indigo-50 rounded p-2 shadow-sm">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-500 rounded-full"></span>
                <span className="text-base md:text-lg text-gray-700 break-words whitespace-normal">
                  Sponsored education for 50 students in rural areas
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow mt-0 text-left">
          <h2 className="text-lg font-bold mb-2">Recent Activities</h2>
          <ul className="space-y-2">
            <li className="flex items-start bg-indigo-50 rounded p-2 shadow-sm">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-500 rounded-full"></span>
              <span className="text-base md:text-lg text-gray-700 break-words whitespace-normal">NarayanaSwamy was promoted as Senior manager</span>
            </li>
            <li className="flex items-start bg-indigo-50 rounded p-2 shadow-sm">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-500 rounded-full"></span>
              <span className="text-base md:text-lg text-gray-700 break-words whitespace-normal">GuruGovind monthly performance report submitted to HR</span>
            </li>
            <li className="flex items-start bg-indigo-50 rounded p-2 shadow-sm">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-500 rounded-full"></span>
              <span className="text-base md:text-lg text-gray-700 break-words whitespace-normal">Developed AI agent to clone all projects and to automate them.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard