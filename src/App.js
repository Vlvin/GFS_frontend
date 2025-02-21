import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exception from './pages/Exception';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Find from './pages/Find';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/form/:id' element={<Exception message="Not-implemented" />} />
          <Route path='/find' element={<Find />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/users/:id" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
