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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function btnClick(newValue) {setStatus(newValue)};

  function logIn(email,password) {setEmail(email); setPassword(password)};

  function createAcct(email,password,name) {setEmail(email); setPassword(password); setName(name)};


  return (
    <div className="container">

      <Header className="header" status={status} onClick={btnClick}/>

      {status == 'SignIn' && <SignIn onClick={logIn} />}
      
      {status == 'SignUp' && <SignUp onClick={createAcct}/>}
      
      {status == 'Landing' && <Landing />}     

      <p>Email {email} password {password} name {name}</p>
     
    </div>
  );
}

export default App;
