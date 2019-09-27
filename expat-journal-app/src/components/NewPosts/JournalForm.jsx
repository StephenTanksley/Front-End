
import React, { useState, useEffect } from 'react'
import { Container } from '../Styles/Styles'
import { axiosWithAuth as axios } from '../axiosutil';

//Keep working without auth, but know that we're putting auth back in.

//This component accepts user input. This is our form.
function JournalForm( props, picture, setPicture, edit ){
  const [formValues, setFormValues] = useState({
    title: "",
    city: "",
    country: "",
    // date: null,
    content: "",
    imageURL: "",
  }); 

  const initialState = {
    title: "",
    city: "",
    country: "",
    // date: null,
    content: "",
    imageURL: "",
  };


  useEffect(( props, edit, picture ) => {
    if (edit) {
      const editForm = picture.filter(picture => picture.item.id.toString() === props.id)[0]
      setFormValues(editForm)
    }
  }, [])

  function handleChange({ target: {name, value}}) {
    setFormValues({ ...formValues, [name]: value})
  }

  function addForm() {
    setFormValues(state =>({...state, id: props.id}))
    // setPicture([ ...picture, formValues])
  }

  function updateForm() {
    const updatedForm = picture.map(item => {
      if(item.id.toString() === props.id) {
        return formValues(item.id);
      }else {
        return item;
      }
    })
    setPicture(updatedForm)
  }


  function handleSubmit(e) {
    const user_id = localStorage.getItem('user')
    const post = {...formValues, user_id: user_id}
    // const id = {...formValues, id: id}
    e.preventDefault();

    //When we're submitting, we want to know if the submission is an edit or an added form.
    edit ? updateForm(formValues) : addForm(formValues)

    axios()
      .post("/posts/", post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    setFormValues(initialState);
  }

  
  
  return(
      <div className='new-entry'>
        <Container>
          <form onSubmit={handleSubmit}>
            
            <input 
              className="input-field" 
              name="title" 
              placeholder="title" 
              value={formValues.name}  
              onChange={handleChange} />
 
            <input 
              className="input-field" 
              name="imageURL" 
              placeholder="picture URL" 
              value={formValues.imageURL} 
              onChange={handleChange} /> <br />

            {/* <input className="input-field"name="date" placeholder="date" value={formValues.date} onChange={handleChange} /><br /> */}

            <input 
              className="input-field" 
              name="city" 
              placeholder="city" 
              value={formValues.city} 
              onChange={handleChange} />

            <input 
              className="input-field"
              name="country" 
              placeholder="country" 
              value={formValues.country} 
              onChange={handleChange} /> <br />

            <input 
              className="input-field description" 
              name="content" 
              placeholder="describe your journey" 
              type="text" 
              size="50" 
              value={formValues.content} 
              onChange={handleChange} />

            <Container>
              <button className="submit-button" type="submit">Share your Story!</button>
            </Container>

          </form>
        </Container>
      </div>
  )}

  export default JournalForm