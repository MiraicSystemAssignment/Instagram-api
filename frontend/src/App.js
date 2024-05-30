import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import HomePage1 from './Views/HomePage1';
import HomePage2 from './Views/HomePage2';
import ManagePost from './Views/ManagePost';
import ManagePost1 from './Views/ManagePost1';

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage1" element={<HomePage1 setToken = {setAccessToken}/>} />
        <Route path="/HomePage2" element={<HomePage2 accessToken = {accessToken}/>} />
        <Route path="/posts" element={<ManagePost />} />
        <Route path="/posts1" element={<ManagePost1 />} />
      </Routes>
    </Router>
  );
};

export default App;
