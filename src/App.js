import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exception from './pages/Exception';
import Login from './pages/Login';
const Default = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Default/> }/>
        <Route path='/Home' element={ <Home/> }/>
        <Route path='/forms' element={ <Exception message="Not-implemented"/> }/>
        <Route path='/form' element={ <Exception message="Not-implemented"/> }/>
        <Route path='/find' element={ <Exception message="Not-implemented"/> }/>
        <Route path='/register' element={ <Exception message="Not-implemented"/> }/>
        <Route path='/login' element={ <Login/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
