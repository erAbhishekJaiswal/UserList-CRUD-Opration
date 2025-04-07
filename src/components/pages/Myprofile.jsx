import React from "react";
import { useEffect, useState } from "react";
import "../../cssfiles/myprofile.css";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Myprofile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id)

  useEffect(() => {
    fatchData();
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  }

  const fatchData = async () => {
    try {
      const res = await axios.get(`https://user-list-crud-opration-backend.vercel.app/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(res.data);
      setLoading(false);
      console.log(res.data.id);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  if (loading) {
    <div className="my-profile">
      <div className="profile-title">My Profile</div>
      <h1>Loading...</h1>
    </div>;
  }

  return (
    <div className="my-profile">
      <div className="profile-title">My Profile</div>

      {!loading && (
        <div className="profile-card">
          <div className="image">
            <img className="inner-image"
              src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png"
              width="300px"
              height="300px"
              alt="none"
            />
          </div>
          <div className="textbox">
            <h3>
              Name: {data?.firstname} {data.lastname}
            </h3>
            <p>Email: {data?.email}</p>
            <div className="btns">
              <button
                className="update-btn"
                onClick={() => handleUpdate(data.id)}
              >
                <FaRegEdit /> Update
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(data.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprofile;
