import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../cssfiles/navbar.css'
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const t = localStorage.getItem('token');
  const loggedid = localStorage.getItem('id');
  const navigate = useNavigate();
  useEffect(() => {
    if (t && loggedid) {
      setToken(t);
      setId(loggedid);
    }
  }, [t,loggedid]);

  const logoutbtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.reload();
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <div className="navin">
        <div className="logo">Logo</div>
        <ul className='ullinks'>
          {token ?
            <>
              <li className='list'><Link className='link' to={'/users'}>User List</Link></li>
              <li className='list'><Link className='link' to={`/myprofile/${id}`}>< CgProfile /></Link></li>
              {/* <li className='list'><Link className='link' to={'/rolemanagement'}>Role Management</Link></li> */}
              <li className='list'><button onClick={logoutbtn} className='logoutbtn'>Logout</button></li>
            </> : <>
              {/* <li className='list'><Link className='link' to={'/'}>Home</Link></li> */}
              <li className='list'><Link className='link' to={'/'}>Home</Link></li>
              <li className='list'><Link className='link' to={'/login'}>Login</Link></li>
              <li className='list'><Link className='link' to={'/register'}>Register</Link></li>
            </>
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
