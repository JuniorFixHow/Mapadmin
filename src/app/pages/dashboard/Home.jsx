import React from 'react';
import './home.css';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import UsersTable from '../../components/usersTable/UsersTable';
import LocationsTable from '../../components/locationsTable/LocationsTable';
import FeedbacksTable from '../../components/feedbacksTable/FeedbacksTable';

const Home = () => {
  return (
    <div className='home' >
        
        <div className='down' >
          <FeedbacksTable />
        </div>
    </div>
  )
}

export default Home