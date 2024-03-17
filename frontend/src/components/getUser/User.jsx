import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'

const User = () => {

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("http://localhost:4000/api/")
            setUsers(response.data)
        }
        fetchData();
    },[])
    const deleteUser = async(userId) =>{
        await axios.delete(`http://localhost:4000/api/delete/${userId}`)
        .then((respones)=>{
          setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
          toast.success(respones.data.msg, {position: 'top-right'})
        })
        .catch((error) =>{
          console.log(error);
        })
    }
    return (
        <div className='userTable'>
            <Link to = {"/add"} className='addButton'>Add User</Link>
            <table border = {7} cellPadding={10} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i>Delete</button>
                                <Link to={`/update/`+user._id}><i className="fa-solid fa-pen-to-square">Edit</i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
                       
                    
                </tbody>
            </table>
        </div>
    )
}

export default User