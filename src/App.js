import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exception from './pages/Exception';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/forms' element={<Exception message="Not-implemented" />} />
          <Route path='/form' element={<Exception message="Not-implemented" />} />
          <Route path='/find' element={<Exception message="Not-implemented" />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
