import React, {useEffect, useState} from 'react';
import { withFormik, Form, Field, } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import App from "../../src/App.css"




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
      
       <SomeForm>
         {touched.username && errors.username &&<p>{errors.userName}</p>}
         
        <Field  type='username' name='username' placeholder='UserName' autoFocus/>
         
         

         
         {touched.password && errors.password && <p>{errors.password}</p>}
         <Field type='password' name='password' placeholder ='Password'/>
         
       
        
         
         {touched.email && errors.email &&<p>{errors.email}</p>}
         <Field type="email" name='email' placeholder ='Email'/>
        
         {touched.fname && errors.fname &&<p>{errors.fname}</p>}
            <Field type='name' name='fname' placeholder='First Name'/>
         
           {touched.lname && errors.lname &&<p>{errors.lname}</p>}
            <Field type='name' name='lname' placeholder='Last Name'/>

 
            
         
         
         
         <button type='submit'>Submit</button>
         {names.map(name =>(
            <>
         <p>Username: {name.username}</p>
         <p>Name: {name.fname} {name.lname}</p>
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
      username: values.username || "",
      password: values.password || "",
      email: values.email || "",
      fname: values.fname || "",//default values
      lname: values.lname || "",


   };
},validationSchema: yup.object().shape({
username: yup.string().required('User name is blank.'),
password: yup.string().min(6,'Password is not long enough').required('Password is blank'),
email: yup.string().email().required('Email is blank'),
fname: yup.string().required('First name is blank'),
lname: yup.string().required('Last name is blank')//validation for login
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