import React, { useEffect, useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { SomeForm } from '../Styles/Styles'
import { Container } from "../Styles/Styles";
import { Link } from "react-router-dom";
import { axiosWithoutAuth as axios } from '../axiosutil'

const UserSignup = ({ errors, touched, status,isSubmitting,history }) => {
  const [names, setNames] = useState([]);
  const forwardSignUp = ()=>{
    history.push('/')
  }
  useEffect(() => {
    if (status) {
      setNames([...names, status]);
      forwardSignUp();
    }
  }, [status]);

  return (
    <>
      <Form>
        <SomeForm>
          {touched.username && errors.username && <p>{errors.username}</p>}

          <Field
            type="username"
            name="username"
            placeholder="Username"
            
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password"
            autoComplete="new-password"
            name="password"
            placeholder="Password"
            
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          {touched.fname && errors.fname && <p>{errors.fname}</p>}
          <Field
            type="name"
            name="fname"
            placeholder="First Name"
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          {touched.lname && errors.lname && <p>{errors.lname}</p>}
          <Field
            type="name"
            name="lname"
            placeholder="Last Name"
            style={{ width: 130, height: 40, fontSize: 20, borderRadius: 5 }}
          />

          <div>
            <Container>
              <Link to="/login">Already have an account? Login instead</Link>
            </Container>
          </div>

          <button
            type="submit"
            style={{ width: 70, height: 30, borderRadius: 35 }} disabled={isSubmitting}
          >
            Sign Up
          </button>

          {/* //Used just to see items which had been input into fields.  
         
         {names.map(name =>(
            <>
         <p>Username: {name.username}</p>
         <p>Name: {name.fname} {name.lname}</p>
         <p>Email: {name.email}</p>
         
            </>
         ))} */}
        </SomeForm>
      </Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "", //default values
      password: values.password || "",
      email: values.email || "",
      fname: values.fname || "",
      lname: values.lname || ""
    };
  },

  validationSchema: yup.object().shape({
    username: yup.string().required("User name is blank."),
    password: yup
      .string()
      .min(6, "Password is not long enough")
      .required("Password is blank"),
    email: yup
      .string()
      .email()
      .required("Email is blank"),
    fname: yup.string().required("First name is blank"),
    lname: yup.string().required("Last name is blank") //validation for login
  }),
  handleSubmit: (values, { setStatus, setError,  }) => {
    axios()
      .post("/auth/register", values)
      .then(response => {
        setStatus(response.data);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user.id))
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
        setError({error})
      });
  }
})(UserSignup); //Axios some styling changes
