import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const SignIn = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    setEmail(event.target.value);
  }

  const changePW = (event) => {
    setPassword(event.target.value);
  }

  const handleForm = (event) => {
    event.preventDefault()
    props.onClick(email,password);
  }

    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={changeHandler} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={changePW}/>
        </Form.Group>
        <Button onClick={handleForm} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default SignIn