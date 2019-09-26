import React, { useState, useEffect } from 'react'
import { Container } from '../Styles/Styles'


//This component accepts user input. This is our form.

const JournalForm = ({journal, setJournal}) => {
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    date: null || '',
    imageURL: "",
    user_id: Date.now()
  })

  function handleChange({ target: {name, value}}) {
    setFormValues({ ...formValues, [name]: value})
  }

  function handleSubmit(e) { 
    e.preventDefault();
    setFormValues(state =>({...state, id: Date.now()}))
    setJournal([ ...journal, formValues])
    console.log(formValues);
    console.log(journal)
  }
  
  
  return(
      <div className='new-entry'>
        <Container>
          <form onSubmit={handleSubmit}>
            
            <input className="input-field" name="title" placeholder="title" value={formValues.name}  onChange={handleChange} />
 
            <input className="input-field" name="imageURL" placeholder="picture URL" value={formValues.imageURL} onChange={handleChange} /> 

            <input className="input-field"name="date" placeholder="date" value={formValues.date} onChange={handleChange} /><br />

            <input className="input-field description" name="content" placeholder="describe your journey" type="text" size="50" value={formValues.content} onChange={handleChange} />

            <button onClick={handleSubmit}>Share your Story!</button>

{/* Unable to add multiple form values at the same time. */}

          </form>
        </Container>
      </div>
  )}


export default JournalForm