import './App.css';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Calculator from './components/Calculator';
import './sass.scss';

function App() {
  return (
    <div className="container">

      <Header className="header"/>

      <Calculator className="test"></Calculator>

      <Button className="test">React-Strap Button</Button>
     
    </div>
  );
}

export default App;
