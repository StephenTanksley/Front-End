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

            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
            <Field type="text" name="email" placeholder="Email" /><br /><br />

            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
            <Field type="text" name="password" placeholder="Password" /><br /><br />

            {touched.role && errors.role && <p className='error'>{errors.role}</p>}
            <Field component="select" name="role" placeholder="Role">
              <option value="" disabled>Select Role: </option>
              <option value="developer">Developer</option>
              <option value="legal">Legal</option>
              <option value="ux-designer">UX Designer</option>
            </Field><br /><br />


            {touched.terms && errors.terms && <p className='error'>{errors.terms}</p>}
            <label>  
              <span>Do you agree to the Terms and Conditions?</span>
              <Field type="checkbox" name = "terms" />
            </label><br /><br />
            <button type="submit" name="submit">Submit</button>
            </Form>
          </FormContainer>



        </Container>


        </div>

    )



}