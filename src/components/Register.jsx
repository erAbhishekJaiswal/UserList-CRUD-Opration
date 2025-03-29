// src/components/Register.js
// import { set } from 'mongoose';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Here you would send the registration data to your server
        console.log('Registered with:',firstname, lastname, email, password);

        try {
            axios.post('http://localhost:3000/api/register', { firstname, lastname, email, password });
            alert('Registration successful!');
            setFirstname('');
            setLastname('');
            // setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
        // Redirect to login after successful registration
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <div className="registerbox">
                <h2>Register</h2>
                <form onSubmit={handleRegister} className="auth-form">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Register</button>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
