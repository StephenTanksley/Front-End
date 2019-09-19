import React, {useEffect, useState} from 'react';
import { withFormik, Form, Field, } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components'
import App from "../../src/App.css"
import { Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button , CardLink} from 'reactstrap';

const SomeForm = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  color:red;
  `;


const UserDetails = ({errors, touched, status})=> {
   

      const [names, setNames] = useState([]);
    
      useEffect(() => {
        if (status) {
          setNames([...names, status]);
        }
      }, [status]);
   return (
      <>
      
     
      <Form>
      
          
        <SomeForm>{touched.userName && errors.userName &&<p>{errors.userName}</p>}
         
         <Field  type='userName' name='userName' placeholder='UserName'/>
         
         

         
         {touched.password && errors.password && <p>{errors.password}</p>}
         <Field type='password' name='password' placeholder ='Password'/>
         
       
        
         
         {touched.email && errors.email &&<p>{errors.email}</p>}
         <Field type="email" name='email' placeholder ='Email'/>
        
         
         
           {touched.name && errors.name &&<p>{errors.name}</p>}
            <Field type='name' name='name' placeholder='Name'/>
   
         
         
         
         
         <button type='submit'>Submit</button>
         {names.map(name =>(
            <>
         <p>Username: {name.userName}</p>
         <p>Name: {name.name}</p>
         <p>Email: {name.email}</p>
            </>
         ))}
     </SomeForm>
      </Form>
      
      </>
      
   )
}

export default withFormik({mapPropsToValues: values =>{
   return{
      userName: values.userName || "",
      password: values.password || "",
      email: values.email || "",
      name: values.name || "",//default values
   };
},validationSchema: yup.object().shape({
userName: yup.string().required('User name is blank.'),
password: yup.string().min(6,'Password is not long enough').required('Password is blank'),
email: yup.string().email().required('Email is blank'),
name: yup.string().required('Name is blank'),//validation for login
}),
handleSubmit:(values ,{setStatus}) =>{
   axios
   .post("https://reqres.in/api/user", values)
   .then(response => {
     setStatus(response.data);
   })
   .catch(error => {
     console.log(error);
   });
}
})(UserDetails);//Axios