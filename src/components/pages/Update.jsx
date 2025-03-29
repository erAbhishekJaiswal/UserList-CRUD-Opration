import React, { useEffect } from 'react'
import '../../cssfiles/update.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [loading, setLoading] = React.useState(true);
    // const [error, setError] = React.useState(null);
    const [data, setData] = React.useState();
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const { id } = useParams();

    useEffect(() => {
        fatchData();
    }, []);
    const fatchData = async () => {
        try {
          const res = await axios.get(`https://user-list-crud-opration-backend.vercel.app/api/user/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setData(res.data);
          setFirstname(res.data.firstname);
          setLastname(res.data.lastname);
          setEmail(res.data.email);
          setLoading(false);
          console.log(res.data.id);
        } catch (error) {
          console.log(error);
        //   setError(error);
        }
      };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://user-list-crud-opration-backend.vercel.app/api/user/${id}`, {
                firstname,
                lastname,
                email
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            console.log(res.data);
            alert("User updated successfully");
            fatchData();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    // <div className='update-page-container'>
      <div className="update-mainbox">
        <div className="update-card">
            <div className="update-card-header">
                <h2>Update User</h2>
            </div>
            <div className="update-card-body">
                {!loading && 
                <form onSubmit={handleUpdate} className='update-form' action="">
                <div className="update-form-group">
                    <label className='update-label' htmlFor="name">First Name:</label>
                    <input className='update-input' value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname" />
                </div>
                <div className="update-form-group">
                    <label className='update-label' htmlFor="name">Last Name:</label>
                    <input className='update-input' value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname" />
                </div>
                <div className="update-form-group">
                    <label className='update-label' htmlFor="email">Email</label>
                    <input className='update-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                </div>
                {/* <div className="update-form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div> */}
                <button type='submit' className='update-btn'>Update</button>
                </form>
                }
            </div>
        </div>
      </div>
    // </div>
  )
}
export default Update
