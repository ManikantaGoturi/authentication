import React, {useEffect, useState} from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

const base_url = 'http://localhost:8080/api';

const Reports = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(()=>{
    fetch(`${base_url}/allemployee`)
    .then(res => res.json())
    .then(data =>{
      const reportData = data.map(emp=>({
        name:emp.name,
        tasks:Math.floor(Math.random()*51) + 50
      }));
      setPerformanceData(reportData)
    }).catch(err => console.log(err));
  }, []);
  

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={performanceData}>
          <XAxis dataKey="name">
            <Label value="Employee names" offset={0} position="insideBottom" dy={5}/>
          </XAxis>
          <YAxis>
            <Label value="Performance" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip />
          <Bar dataKey="tasks" fill="#3b82f6" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Reports