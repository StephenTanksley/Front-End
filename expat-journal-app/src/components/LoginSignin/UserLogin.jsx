import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../Styles/Styles";

const SomeForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.7rem;
`;

const UserLogin = ({ touched, errors, status , isSubmitting }) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    if (status) {
      setName([...name, status]);
    }
  }, [status]);

  console.log("Name", name);
  console.log("Touched", touched);
  console.log("Errors", errors);
  return (
    <>
      <Form>
        <SomeForms>
          {touched.username && errors.username && <p> {errors.username}</p>}
          <Field
            type="login"
            name="username"
            placeholder="Username"
          
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
           />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password"
            name="password"
            placeholder="Password"
           
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          <div>
            <Container>
              <Link to="/">Don't have an account? Sign up instead</Link>
            </Container>
          </div>
        </SomeForms>

        <Container>
          <button 
            type="login"
            style={{ width: 70, height: 30, borderRadius: 35 }} disabled={isSubmitting}
          >
            Login
          </button>
        </Container>
        {/* {usernames.map(name =>(
         {name.username}
         ))} */}
      </Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: value => {
    return {
      username: value.username || "",
      password: value.password || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
  }),
  handleSubmit: (value, { resetForm, setErrors, setStatus, setSubmitting }) => {
    axios
      .post("https://be-expat-journal.herokuapp.com/api/auth/login", value)
      .then(response => {
        setStatus(response.data);
        resetForm();
        setSubmitting(false);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
        setErrors("User not found")
        
      });
  }
})(UserLogin);
