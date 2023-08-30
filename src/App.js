import { Route, Routes } from 'react-router-dom';
import Home from './app/pages/dashboard/Home.jsx';
import Login from './app/pages/login/Login.jsx';
import UsersTable from './app/components/usersTable/UsersTable.jsx';
import Header from './app/components/header/Header.jsx';
import Nav from './app/components/nav/Nav.jsx';
import './app.css';
import FeedbacksTable from './app/components/feedbacksTable/FeedbacksTable.jsx';
import LocationsTable from './app/components/locationsTable/LocationsTable.jsx';
import { useState } from 'react';

function App() {
  const [newUser, setNewUser] = useState(false);
  const [newLocation, setNewLocation] = useState(false);
  const user = false;
  return (
  <div className='app' >
    {
      user &&
      <Header />
    }
    <div className='down' >
      {
        user &&
        <Nav />
      }
      <Routes>
          <Route path='/' >
            <Route path='/login' element={<Login />} />
            <Route index element={<Home />} />
            <Route path='/users' element={<UsersTable newUser={newUser} setNewUser={setNewUser} />} />
            <Route path='/feedbacks' element={<FeedbacksTable />} />
            <Route path='/locations' element={<LocationsTable newLocation={newLocation} setNewLocation={setNewLocation} />} />
          </Route>
      </Routes>
    </div>
  </div>
  );
}

export default App;
