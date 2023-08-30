import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal } from '@mui/material';
import './newLocation.css';

const NewLocation = ({newLocation, setNewLocation}) => {
  const [data, setData] = useState({
    email:'',
    name:'',
    phone:'',
    password:'',
    lat:'',
    long:'',
  });
  const [photo, setPhoto] = useState(null);
  const photoRef = useRef(null);

  const handleChangeText = (e)=>{
      setData(prev=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  
  const handleDrop = (e)=>{
    e.preventDefault();
    setPhoto(e.dataTransfer.files[0]);
  }
  const handleDrag = (e) =>{
    e.preventDefault();
  }

  const handleClose =()=>{
    setNewLocation(false)
    setPhoto(null)
  }

  const gotLocation = (pos)=>{
    // console.log(pos.coords.latitude, pos.coords.longitude) 
    setData(prev=>({
        ...prev,
        lat:pos.coords.latitude,
        long:pos.coords.longitude,
    }))
  }
  const errorLocation = ()=>{
    console.log('error')
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(gotLocation, errorLocation);
  },[])

  return (
      <Modal
        open={newLocation}
        onClose={()=>setNewLocation(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="newLocation">
         <div className="inputcontainer">
          <span className="new">New Location</span>
          <div className="controls">
            <div onDragOver={handleDrag} onDrop={handleDrop} className="imgcontainer">
                {
                    photo? 
                    <img src={URL.createObjectURL(photo)} alt="location" />:
                    <div className="left" />
                }

                <div className="right">
                    <span className="drop">Drop an image here</span>
                    <span className="drop">Or</span>
                    <span onClick={()=>photoRef.current.click()} className="drag">Select image here</span>
                    <input type="file" ref={photoRef} hidden onChange={(e)=>setPhoto(e.target.files[0])} />
                </div>

            </div>
            <input onChange={handleChangeText} placeholder='name' type="text" name="name"  />
            <input onChange={handleChangeText} placeholder='category' type="text" name="cat"  />
            <input onChange={handleChangeText} placeholder={'latitude: '+ data?.lat} type="text" name="lat"  />
            <input onChange={handleChangeText} placeholder={'longitude: '+data?.long} type="text" name="long"  />
            <div className="down">
              <button onClick={handleClose} className='cancel' >Cancel</button>
              <button className='save' >Save</button>
            </div>
          </div>
         </div>
        </div>
      </Modal>
  );
}
export default NewLocation