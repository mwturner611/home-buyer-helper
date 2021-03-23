import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Calculator from './components/Calculator';
import {useState} from 'react';
import './sass.scss';

function App() {
  const [status, setStatus] = useState("Landing");

  function btnClick(newValue) {setStatus(newValue)};

  return (
    <div className="container">

      <Header className="header" status={status} onClick={btnClick}/>

      {status == 'SignIn' && <SignIn />}
      
      {status == 'SignUp' && <SignUp />}
      
      {status == 'Landing' && <Landing />}     
     
    </div>
  );
}

export default App;
