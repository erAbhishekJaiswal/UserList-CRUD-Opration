// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../cssfiles/RLogin.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState('');
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (!token) {
//   //     navigate('/login');
//   //   }
//   // }, [navigate]);

//   // const token = localStorage.getItem('token');
//   // console.log(token);
  

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // Here you would normally authenticate the user, for now we just log them in
//     console.log('Logged in with:', email, password);
//     try {
//       const res = await axios.post('https://user-list-crud-opration-backend.vercel.app/api/login', { email, password });
//       console.log(res.data.user);
//       const id = res.data.user._id;
//       console.log(res.data.token);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('id', res.data.user._id);
//       setToken(res.data.token);
//       navigate(`/users`);
//     } catch (error) {
//       console.log(error);
//     }
//     // Redirect to the dashboard (or home page)
//     }
//   };

//   return (
//     <div className="auth-container">
//         <div className="loginbox">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} className="auth-form">
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="auth-button">Login</button>
//         <p>Don't have an account? <a href="/register">Register</a></p>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/RLogin.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  // const token = localStorage.getItem('token');
  // console.log(token);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would normally authenticate the user, for now we just log them in
    // console.log('Logged in with:', email, password);
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
      console.log(error);
    }
    // Redirect to the dashboard (or home page)
    
  };

  return (
    <div className="auth-container">
        <div className="loginbox">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
      </div>
    </div>
  );
};

export default Login;

