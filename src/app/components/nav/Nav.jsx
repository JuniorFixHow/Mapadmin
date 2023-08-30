import React from 'react'
import './nav.css';
import logo from '../../../assets/logo.jpg';
import {MdLocationPin} from 'react-icons/md';
import {RiFeedbackFill} from 'react-icons/ri';
import {FaUsers} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    const handleUsers =()=>{
        navigate('/users');
    }
    const handleLocations =()=>{
        navigate('/locations');
    }
    const handleFeedbacks =()=>{
        navigate('/feedbacks');
    }
  return (
    <div className='nav' >
        <img src={logo} alt="logo" />
        <div className="items">
            <div onClick={handleLocations}  className="one">
                <MdLocationPin className='icon' />
                <span className="title">Locations</span>
            </div>
            <div onClick={handleFeedbacks} className="one">
                <RiFeedbackFill className='icon' />
                <span className="title">Feedbacks</span>
            </div>
            <div onClick={handleUsers} className="one">
                <FaUsers className='icon' />
                <span className="title">Users</span>
            </div>
        </div>
    </div>
  )
}

export default Nav