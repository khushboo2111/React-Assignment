import React from 'react'
import "./add.css"
import {Link} from 'react-router-dom';
const Add = () => {
    return (
        <div className='addUserForm'>
            <Link to = {"/"}>Back</Link>
            <h3>Add new user</h3>
            <form>
            <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                     <input type='text' id='fname' name='fname' autoComplete='off' placeholder='First Name'/>
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                     <input type='text' id='lname' name='lname' autoComplete='off' placeholder='Last Name'/>
                </div>

                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                     <input type='text' id='email' name='email' autoComplete='off' placeholder='Email'/>
                </div>

                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                     <input type='text' id='password' name='password' autoComplete='off' placeholder='password'/>
                </div>
                <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
            </form>
        </div>
    )
}

export default Add