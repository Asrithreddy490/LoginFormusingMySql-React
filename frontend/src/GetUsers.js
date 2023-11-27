import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/user')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>User List</h2><Link to={"/login"}>login</Link>

      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GetUsers;
