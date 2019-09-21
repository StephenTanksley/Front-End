import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as yup from 'yup';
import styled from "styled-components"

const SomeForms = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: .7rem;

  
  `;
const UserSignIn = ({touched, errors, status}) =>{
   const [usernames, setUserNames] = useState([]);
    
   useEffect(() => {
     if (status) {
       setUserNames([...usernames, status]);
     }
   }, [status]);
   return(
      <>
      <Form>
         <SomeForms>
         {touched.username && errors.username &&<p>{errors.username}</p>}
         <Field type='login' name='username' placeholder='Username' autofocus style={{width: 130, height: 40, fontSize: 20, borderRadius: 5}}/>
         {touched.password && errors.password && <p>{errors.password}</p>}
         <Field type='password' name='password' placeholder='Password' autofocus style={{width: 130, height: 40, fontSize: 20, borderRadius: 5}} />
         
         </SomeForms><button type='login' style={{width:70, height: 30, borderRadius: 35}}>Login</button>
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

})(UserSignIn)