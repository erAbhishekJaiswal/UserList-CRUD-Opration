import React from 'react'
import '../cssfiles/HomePage.css';
const Home = () => {
 // Mock user data
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

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
              <button className="login-btn">Login as {user.name.split(' ')[0]}</button>
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
