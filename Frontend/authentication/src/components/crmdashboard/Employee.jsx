import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const base_url = 'http://localhost:8080/api';

const Employee = ({searchValue}) => {
  const [employee_id, setEmployeeId] = useState('');
  const [emp_name, setEmpname] = useState('');
  const [emp_Email, setEmpEmail] = useState('');
  const [emp_Role, setEmpRole] = useState('');
  const [emp_Department, setEmpDepartment] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(()=>{
    if(!searchValue){
      setFilteredEmployees(employees);
    }else{
      setFilteredEmployees(
        employees.filter(emp => emp.name.toLowerCase().includes(searchValue.toLowerCase()))
      )
    }
  },[searchValue,employees]);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(`${base_url}/allemployee`);
      const data = await res.json();
      setEmployees(data);
      setFilteredEmployees(data);
    } catch (err) {
      console.log(err);
    }
  };

  

  const handleAddClick = () => {
    setIsAdding(true);
    setEditingId(null);
    setEmployeeId('');
    setEmpname('');
    setEmpEmail('');
    setEmpRole('');
    setEmpDepartment('');
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setEmployeeId('');
    setEmpname('');
    setEmpEmail('');
    setEmpRole('');
    setEmpDepartment('');
  };

  const handleEdit = (emp) => {
    setEditingId(emp._id);
    setEmployeeId(emp.id);
    setEmpname(emp.name);
    setEmpEmail(emp.email);
    setEmpRole(emp.role);
    setEmpDepartment(emp.department);
    setIsAdding(false);
  };

  const handleSave = async () => {
    if (employee_id && emp_name && emp_Email && emp_Role && emp_Department) {
      try {
        const empDetails = {
          id: Number(employee_id),
          name: emp_name,
          email: emp_Email,
          role: emp_Role,
          department: emp_Department,
        };
        const res = await fetch(`${base_url}/add`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(empDetails)
        });
        if (res.ok) {
          fetchEmployees();
          setIsAdding(false);
          setEmployeeId('');
          setEmpname('');
          setEmpEmail('');
          setEmpRole('');
          setEmpDepartment('');
        } else {
          alert("Failed to add employee");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      const res = await fetch(`${base_url}/deleteEmployee/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEmployees(employees.filter(emp => emp._id !== id));
      } else {
        alert("Failed to delete employee");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    if (editingId && emp_name && emp_Email && emp_Role && emp_Department) {
      try {
        const empDetails = {
          id: Number(employee_id),
          name: emp_name,
          email: emp_Email,
          role: emp_Role,
          department: emp_Department,
        };
        const res = await fetch(`${base_url}/update/${editingId}`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(empDetails)
        });
        if (res.ok) {
          fetchEmployees();
          setEditingId(null);
          setEmployeeId('');
          setEmpname('');
          setEmpEmail('');
          setEmpRole('');
          setEmpDepartment('');
        } else {
          alert("Failed to update employee");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="flex-1 flex flex-col">
        
        <div className="p-4 md:p-6 bg-gray-50 flex-1">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Employees Details</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">ID</th>
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Email</th>
                  <th className="px-4 py-2 border-b text-left">Role</th>
                  <th className="px-4 py-2 border-b text-left">Department</th>
                  <th className="px-4 py-2 border-b text-left" colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isAdding && (
                  <tr>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={employee_id} onChange={e => setEmployeeId(e.target.value)} placeholder="ID" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_name} onChange={e => setEmpname(e.target.value)} placeholder="Name" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Email} onChange={e => setEmpEmail(e.target.value)} placeholder="Email" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Role} onChange={e => setEmpRole(e.target.value)} placeholder="Role" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Department} onChange={e => setEmpDepartment(e.target.value)} placeholder="Department" />
                    </td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-xs" onClick={handleSave}>Add</button>
                    </td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-xs" onClick={handleCancel}>Cancel</button>
                    </td>
                  </tr>
                )}
                {editingId && !isAdding && (
                  <tr>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={employee_id} onChange={e => setEmployeeId(e.target.value)} placeholder="ID" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_name} onChange={e => setEmpname(e.target.value)} placeholder="Name" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Email} onChange={e => setEmpEmail(e.target.value)} placeholder="Email" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Role} onChange={e => setEmpRole(e.target.value)} placeholder="Role" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <input className="border px-2 py-1 rounded w-full" value={emp_Department} onChange={e => setEmpDepartment(e.target.value)} placeholder="Department" />
                    </td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs" onClick={handleUpdate}>Update</button>
                    </td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-xs" onClick={handleCancel}>Cancel</button>
                    </td>
                  </tr>
                )}
                {filteredEmployees.map(emp => (
                  <tr key={emp._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{emp.id}</td>
                    <td className="px-4 py-2 border-b">{emp.name}</td>
                    <td className="px-4 py-2 border-b">{emp.email}</td>
                    <td className="px-4 py-2 border-b">{emp.role}</td>
                    <td className="px-4 py-2 border-b">{emp.department}</td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs" onClick={() => handleEdit(emp)}>Edit</button>
                    </td>
                    <td className="px-2 py-2 border-b">
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs" onClick={() => handleDelete(emp._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {!isAdding && !editingId && (
            <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 font-medium" onClick={handleAddClick}>
              Add New Employee
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;