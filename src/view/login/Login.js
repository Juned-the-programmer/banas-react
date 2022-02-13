import { Button } from 'bootstrap';
import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import "./login.css";

const Login = () => {

  const loginUser = (e) => {
    e.preventDefault();
  };

    return (
        <React.Fragment>
            <div className="login_page">
                <div className="wrapper">
                  <h1 style={{textAlign: 'center', fontSize: '60px'}}>Banas Water</h1>
                  <Form style={{marginTop: "100px"}}>
                    <FormGroup>
                      <Input type="text" placeholder="Username" className="input_box" />
                    </FormGroup>
                    <FormGroup className="mt-5">
                      <Input type="password" placeholder="Password" className="input_box" />
                    </FormGroup>
                    <div>
                      <Input type="submit" className="btn btn-success mt-5" value="LOGIN" onClick={loginUser} />
                    </div>
                  </Form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Login;