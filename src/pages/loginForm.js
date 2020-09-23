import React, { useState, useEffect } from 'react';
import * as Yup from "yup";

import { useAuth } from "../hooks/useAuth";
import { Form, Success } from '../components';
export function LoginForm() {
  const [authorized, errors, dispatch] = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  let requiredSchema = null;

  useEffect(function () {
    const regex = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).", "g")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    requiredSchema = Yup.object().shape({
      email: Yup.string()
        .email('email_valid')
        .required('email_required'),
      password: Yup.string()
        .required('password_required')
        .min(6, "password_too_short")
        .matches(regex, "password_pattern_match")
    })
  })

  function formValidation() {
    requiredSchema
      .validate({
        email: email,
        password: password,
      }, { abortEarly: false }).catch(function (err) {
        let errors = [];
        err.errors.forEach(function (error) {
          // eslint-disable-next-line default-case
          switch (error) {
            case 'email_required':
            case 'email_valid':
              errors.push({ "field": "email", "message": "invalid email" })
              break;
            case 'password_required':
            case 'password_too_short':
            case 'password_pattern_match':
              errors.push({ "field": "password", "message": "invalid password" })
              break;
          }
        });
        dispatch({ type: "ERROR", payload: { errors: errors } })
        return false;
      });

    return true;
  }

  function submit(e) {
    e.preventDefault();

    if (formValidation()) {
      if (email === 'test@test.pl' && password === 'Password1') {
        dispatch({ type: "AUTHORIZED", payload: { remember: remember } })
      } else {
        dispatch({ type: "ERROR", payload: { errors: [{ "field": "title", "message": "invalid email or password" }] } })
      }
    }
  }
  // can I use just if/else?
  return (
    <div>
      {(!!(authorized) !== true) && <Form.Form method="POST" action="" onSubmit={(e) => (submit(e))}>
        <Form.Text name="title" errors={errors}>welcome</Form.Text>

        <Form.Fieldset>
          <Form.Label htmlFor="email">email</Form.Label>
          <Form.Input errors={errors} value={email} onChange={(e) => (setEmail(e.target.value))} type="text" name="email" id="email" placeholder="name@example.com" />
          <Form.Label htmlFor="password">password</Form.Label>
          <Form.Input errors={errors} value={password} onChange={(e) => (setPassword(e.target.value))} type="password" name="password" id="password" placeholder="password" />
          <div>
            <input type="checkbox" onChange={() => (setRemember(!remember))} name="remember" id="remember" checked={remember} style={{ float: 'left' }} />
            <Form.Label htmlFor="remember">remember me</Form.Label>
          </div>
          <Form.Submit type="submit" value="login" id="submit">log in</Form.Submit>
        </Form.Fieldset>
      </Form.Form>}
      {(!!(authorized) === true) && <Success>login succesful</Success>}
    </div>
  );
}