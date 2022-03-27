import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import city from "./iranstates.json";
// import { MdVisibilityOff } from "react-icons/Md";
// import { MdVisibility } from "react-icons/Md";

const Register = () => {
  const [validated, setValidated] = useState(false);
  let [name, setname] = useState("");
  let [family, setfamily] = useState("");
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  let [edu, setedu] = useState(0);
  let [cityInput, setCityInput] = useState();
  let [cityTown, setCityTown] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h6 className="my-3 text-white">رایگان ثبت نام کنید </h6>
      <Form.Group className="mb-3 d-flex ">
        <Form.Control
          className="ms-2 bg-transparent"
          type="text"
          placeholder="نام"
          required
        />
        <Form.Control
          className="bg-transparent"
          type="text"
          placeholder="نام خانوادگی"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className="bg-transparent"
          type="email"
          placeholder="*پست الکترونیک"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          className="bg-transparent"
          type="password"
          placeholder="*کلمه عبور"
          required
        />
      </Form.Group>

      <Form.Select
        className="my-3"
        aria-label="Default select example "
        onChange={(e) => setedu(e.target.value)}
      >
        <option> تحصیلات </option>
        <option value="1">کاردانی</option>
        <option value="2">کارشناسی </option>
        <option value="3">کارشناسی ارشد </option>
        <option value="4">دکتری </option>
      </Form.Select>
      {edu > 0 && (
        <Form.Group className="my-3">
          <Form.Control
            className="bg-transparent"
            type="text"
            placeholder="محل تحصیل"
            required
          />
        </Form.Group>
      )}

      <Form.Select
        className="my-3 bg-transparent"
        aria-label="Default select example "
        onChange={(e) => setCityInput(e.target.value)}
        required
      >
        <option value="0">محل تولد</option>
        {Object.keys(city).map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Form.Select>

      {city[cityInput] && cityInput !== 0 && (
        <Form.Select
          className="my-3 bg-transparent"
          required
          aria-label="Default select example "
          onChange={(e) => setCityTown(e.target.value)}
        >
          <option>شهرستان</option>
          {city[cityInput].map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Form.Select>
      )}

      <Button className="bg-green" type="submit">
        ثبت نام
      </Button>
    </Form>
  );
};

export default Register;
