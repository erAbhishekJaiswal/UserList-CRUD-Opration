import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../cssfiles/HomePage.css';
import axios from 'axios';
const Home = () => {
 const [token, setToken] = useState('');
  const navigate = useNavigate();
 // Mock user data
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'john', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'jane', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', password: 'bob', role: 'User' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
 
const Loginbymockdata = async( email , password ) =>{
 try {
      const res = await axios.post('https://user-list-crud-opration-backend.vercel.app/api/login', { email, password });
      console.log(res.data.user);
      const id = res.data.user._id;
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.user._id);
      setToken(res.data.token);
      navigate(`/users`);
    } catch (error) {
      console.log(error.message);
    }
}



  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header-section">
        <h1>User CRUD Operation App</h1>
        <p>Manage your users efficiently with this powerful application</p>
      </header>

      {/* User Data Section */}
      <section className="user-section">
        <h2>Available Users (Mock Data)</h2>
        <p>Login with any of these users to access the app:</p>
        
        <div className="user-grid">
          {mockUsers.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <button className="login-btn" onClick={Loginbymockdata(user.email,user.password)}>Login as {user.name.split(' ')[0]}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="developer-info">
            <h3>Developer Contact</h3>
            <p>Email: developer@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} User CRUD Operation App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home
