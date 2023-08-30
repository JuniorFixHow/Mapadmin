import React from 'react';
import './usersTable.css';
import {BsFillPencilFill} from 'react-icons/bs';
import {ImBin2} from 'react-icons/im';
import { Users } from '../../utils/dummyUsers';
import NewUser from '../newUser/NewUser.jsx';
 
const UsersTable = ({newUser, setNewUser}) => {
  return (
    <div className='usertable' >
        <div className="top">
            <div className="titles">
                <span className="title">Admins</span>
                <button onClick={()=>setNewUser(true)} className='new' >Add New</button>
            </div>
            <div className="lefts">
                <span className="unames">Name</span>
                <span className="unames">Phone</span>
                <span className="unames">Email</span>
            </div>
            {
                Users &&
                Users.map(user=>(

                    <div key={user.id} className="details">
                        <div className="left">
                            <span className="uname">{user.name}</span>
                            <span className="uname">{user.phone}</span>
                            <span className="uname">{user.email}</span>
                        </div>
                        <div className="right">
                            <BsFillPencilFill className='edit' />
                            <ImBin2 className='delete' />
                        </div>
                    </div>
                ))
            }
        </div>
        <NewUser setNewUser={setNewUser} newUser = {newUser} />
    </div>
  )
}

export default UsersTable