import React, { useState, useEffect } from 'react'
import { Container } from '../Styles/Styles'


//This component accepts user input. 

const JournalPost = ({journal, setJournal}) => {
  const [formValues, setFormValues] = useState({
    id: Date.now(),
    name: "",
    location: "",
    date: "",
    description: ""
  })

  function handleChange({ target: {name, value}}) {
    setFormValues({ ...formValues, [name]: value})
  }

  function handleSubmit(e) { 
    e.preventDefault();
    setFormValues(state =>({...state, id: Date.now()}))
    setJournal([ ...journal, formValues])
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



export default JournalPost