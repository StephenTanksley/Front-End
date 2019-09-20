import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import { FormContainer, Header, Container } from './Components/Styled'


const PostForm = ({ errors, touched, status }) => {

    console.log(status)
    const [entry, setEntry] = useState([])

    useEffect(() => {
        if(status) {
            setEntry([...entry, status])
        }
    }, [status])

    return(
        <div className='new-entry'>

        <Container>

        <FormContainer>  
          <Form>

            {/* Need something in here for the img. Collaborate with Tim on this. */}

            {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name" /><br /><br />

            {touched.location && errors.location && <p className='error'>{errors.location}</p>}
            <Field type="text" name="location" placeholder="Location (country, city)" /><br /><br />

            {touched.date && errors.date && <p className='error'>{errors.date}</p>}
            <Field type="text" name="date" placeholder="Date" /><br /><br />

            <button type="submit" name="submit">Submit</button>
            </Form>
          </FormContainer>



        </Container>


        </div>

    )



}