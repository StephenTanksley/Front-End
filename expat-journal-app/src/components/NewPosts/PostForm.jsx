import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import { Container } from '../Styles/Styles'


//This component accepts user input. 

const PostForm = ({ errors, touched, status }) => {

  console.log(status)
  const [entry, setEntry] = useState({
    id: null,  
    date: '',
    location: '',
    description: ''
  })

  useEffect(() => {
      if(status) {
          setEntry([...entry, status])
      }
  }, [status])

  return(
      <div className='new-entry'>
        <Container>
          <Form>
            {/* Need something in here for the img. Collaborate with Tim on this.  <img src={errors.url}*/}

            {/* {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name" /><br /><br /> */}

            {touched.date && errors.date && <p className='error'>{errors.date}</p>}
            <Field type="text" name="date" placeholder="Date" /><br /><br />
            {console.log(errors.date)}


            {touched.location && errors.location && <p className='error'>{errors.location}</p>}
            <Field type="text" name="location" placeholder="Location (country, city)" /><br /><br />
            {console.log(errors.location)}


            {touched.description && errors.description && <p className='error'>{errors.description}</p>}
            <Field type="text" name="description" placeholder="Description" />
            {console.log(errors.description)}


            <button type="submit" name="submit">Submit</button>
            </Form>
        </Container>
      </div>
  )}


export default withFormik({
  mapPropsToValues: value => {
    return {
      name: value.name || "",
      date: value.date || "",
      location: value.location || "",
      description: value.description || ""
    };
  },

  validationSchema: yup.object().shape({
    date: yup
      .string()
      .required("What date did you begin your adventure?"),
    location: yup
      .string()
      .required("Where did you go? Country/city"),
    description: yup
      .string()
      // .max(limit: 3000)
      .required("Tell us about what you did and what it was like")
  }),

  handleSubmit: (value, { resetForm, setStatus, setError, setSubmitting }) => {
    axios()
    .post('https://reqres.in/api/', value)
    .then(response => {
      setStatus(response.data);
      resetForm();
      setSubmitting(false);
      console.log(value)
    })
    .catch(error => {
      console.log(error)
      setError({error})
    })
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    //NEED CODE FOR PROTECTED ENDPOINTS MAPPED TO EACH USER.
  }
})(PostForm);

