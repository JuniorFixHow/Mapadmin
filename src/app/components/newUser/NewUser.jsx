import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import './newUser.css';

const NewUser = ({newUser, setNewUser}) => {
  const [data, setData] = useState({
    email:'',
    name:'',
    phone:'',
    password:'',
    isAdmin:true
  });

  const handleChangeText = (e)=>{
      setData(prev=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }

  return (
      <Modal
        open={newUser}
        onClose={()=>setNewUser(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="newuser">
         <div className="inputcontainer">
          <span className="new">New Admin</span>
          <div className="controls">
            <input onChange={handleChangeText} placeholder='email' type="email" name="email"  />
            <input onChange={handleChangeText} placeholder='name' type="text" name="name"  />
            <input onChange={handleChangeText} placeholder='phone #' type="tel" name="phone"  />
            <input onChange={handleChangeText} placeholder='password' type="password" name="password"  />
            <div className="down">
              <button onClick={()=>setNewUser(false)} className='cancel' >Cancel</button>
              <button className='save' >Save</button>
            </div>
          </div>
         </div>
        </div>
      </Modal>
  );
}
export default NewUser