import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as yup from 'yup';
import styled from "styled-components"
import {Link} from 'react-router-dom'
import UserSignup from './UserSignup'
import {Container} from '../Styles/Styles'

const SomeForms = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: .7rem;
  `;

const UserLogin = ({touched, errors, status, values}) =>{
   const [name, setName] = useState([]);
   
   useEffect(() => {
     if (status) {
       setName([...name, status]);
     }
   }, [status]);

   console.log("Name", name)
   console.log("Touched", touched)
   console.log("Errors", errors)
   return(
      <>
      <Form>
         <SomeForms>
         {touched.username && errors.username &&<p> Please fill out all fields.{/*errors.username*/}</p>}
         <Field type='login' name='username' placeholder='Username' autoFocus style={{width: 130, height: 40, fontSize: 20, borderRadius: 5}}/>
         {touched.password && errors.password && <p>{errors.password}</p>}
         <Field type='password' name='password' placeholder='Password' autoFocus style={{width: 130, height: 40, fontSize: 20, borderRadius: 5}} />
         
         <div>
            <Container>
               <Link to='/'>Don't have an account? Sign up instead</Link>
               </Container>
         </div> 
         

         </SomeForms>
         
         <Container>
            <button type='login' style={{width:70, height: 30, borderRadius: 35}}>Login</button>
         </Container>
         {/* {usernames.map(name =>(
         {name.username}
         ))} */}


      </Form>
      </>

   );
}

export default withFormik({mapPropsToValues: value =>{
   return{
      username: value.username || "",
      password: value.password || "",
   };
}, validationSchema : yup.object().shape({
   username: yup.string().required('Username is required'),
   password: yup.string().required('Password is required')
}),
handleSubmit:(value,{setStatus} )=>{
axios
   .post('', value)
   .then(response=>{
      setStatus(response)

   })
   .catch(error=>{
      console.log(error);
   });
}

})(UserLogin)