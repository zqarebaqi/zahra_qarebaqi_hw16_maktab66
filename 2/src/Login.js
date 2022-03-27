import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    alert("وارد شدید ");
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h5 className="m-4 text-white">خوش آمدید</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className="bg-transparent"
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="*پست الکترونیک"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          required
          className="bg-transparent"
          onChange={(e) => setpass(e.target.value)}
          type="password"
          placeholder="* کلمه عبور"
        />
      </Form.Group>
      <Form.Group className="mb-3 text-green">فراموش کردید؟</Form.Group>
      <Button className="bg-green" type="submit">
        ورود
      </Button>
    </Form>
  );
};

export default Login;
