import { Route, Routes } from 'react-router-dom';
import Home from './app/pages/dashboard/Home.jsx';
import Login from './app/pages/login/Login.jsx';
import UsersTable from './app/components/usersTable/UsersTable.jsx';

function App() {
  return (
   <Routes>
      <Route path='/' >
        <Route path='/login' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/users' element={<UsersTable />} />
      </Route>
   </Routes>
  );
}

export default App;
