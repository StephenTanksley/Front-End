import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { SomeForm } from "../Styles/Styles";
import { Link } from "react-router-dom";
import { Container } from "../Styles/Styles";
import { axiosWithoutAuth as axios } from "../axiosutil";

const UserLogin = ({ touched, errors, isSubmitting, history, status }) => {
  const [users, setUsers] = useState([]);
  const forwardUser = () => {
    history.push("/");
  };
  // console.log(history.push)
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      forwardUser();
    }
  }, [status]);
  // console.log(props);

  console.log("Touched", touched);
  // console.log("Errors", errors);

  return (
    <>
      <Form>
        <SomeForm>
          {touched.username && errors.username && <p> {errors.username}</p>}
          <Field
            type="text"
            name="username"
            placeholder="Username"
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          <div>
            <Container>
              <Link to="/sign-up">Don't have an account? Sign up instead</Link>
            </Container>
          </div>
        </SomeForm>

        <Container>
          <button
            type="login"
            style={{ width: 70, height: 30, borderRadius: 35 }}
            disabled={isSubmitting}
            action="/dashboard"
          >
            Login
          </button>
        </Container>
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
    axios()
      .post("/auth/login", value)
      .then(response => {
        setStatus(response.data);
        resetForm();
        setSubmitting(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user.id));

        console.log(value);
      })
      .catch(error => {
        console.log(error.response);
        setErrors("User not found");
      });
  }
})(UserLogin);
