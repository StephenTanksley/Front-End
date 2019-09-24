import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../Styles/Styles'


//This component accepts user input. 

const PostForm = () => {
  const [formValues, setFormValues] = useState({
    id: null,
    name: "",
    location: "",
    date: "",
    description: ""
  })

  function handleChange({target: {name, value}}) {
    setFormValues({...formValues, [name]: value})
  }

  function handleSubmit(e) { 
    e.preventDefault();
    console.log(formValues);
  }

  return(
      <div className='new-entry'>
        <Container>
          <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name="name" value={formValues.name} onChange={handleChange} />


          </form>
        </Container>
      </div>
  )}



export default PostForm