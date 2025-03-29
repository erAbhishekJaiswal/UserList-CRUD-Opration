import React from "react";
import { useEffect } from "react";
import "../../cssfiles/UserPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const UserPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://user-list-crud-opration-backend.vercel.app/api/userslist",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }

      );
      setUsers(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleUpdate = (id) => {
    // console.log(id);
    navigate(`/update/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://user-list-crud-opration-backend.vercel.app/api/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      console.log(res.data);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const token = localStorage.getItem("token");
  if (!token) {
    return navigate("/login");
  }


  return (
    <div className="user-page">
      <h2>User List</h2>
      <div className="user-list">
        {!loading &&
          users.map((users) => (
            <div className="usercard">
              <div className="image">
                <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" width="250px" height="250px" alt="none" />
              </div>
              <div className="textbox">
                <h3>Name: {users.firstname} {users.lastname}</h3>
                <p>Email: {users.email}</p>
                <div className="btns">
                <button className="update-btn" onClick={() => handleUpdate(users._id)}><FaRegEdit /> Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(users._id)}><MdDelete /></button>
                </div>
                
              </div>
            </div>
          ))
        }
            {/* <div className="usercard">
              <div className="image">
                <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" width="250px" height="250px" alt="none" />
              </div>
              <div className="textbox">
                <h3>Name: users.name</h3>
                <p>Role: users.role</p>
                <p>Status: users.status</p>
                <button className="delete-btn" onClick={() => handleDelete(users.id)}><MdDelete /> Delete</button>
              </div>
            </div> */}


            {/* <div className="usercard">
              <div className="image">
                <img src="" alt="" />
              </div>
              <div className="textbox">
                <h3>Name: users.name</h3>
                <p>Role: users.role</p>
                <p>Status: users.status</p>
                <button className="delete-btn" onClick={() => handleDelete(users.id)}>Delete</button>
              </div>
            </div>
            <div className="usercard">
              <div className="image"></div>
              <div className="textbox">
                <h3>Name: users.name</h3>
                <p>Role: users.role</p>
                <p>Status: users.status</p>
                <button className="delete-btn" onClick={() => handleDelete(users.id)}>Delete</button>
              </div>
            </div>
            <div className="usercard">
              <div className="image"></div>
              <div className="textbox">
                <h3>Name: users.name</h3>
                <p>Role: users.role</p>
                <p>Status: users.status</p>
                <button className="delete-btn" onClick={() => handleDelete(users.id)}>Delete</button>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default UserPage;
