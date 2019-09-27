
import React, { useState, useEffect } from 'react'
import { Container } from '../Styles/Styles'
import { axiosWithAuth as axios } from '../axiosutil';

//Keep working without auth, but know that we're putting auth back in.

//This component accepts user input. This is our form.
function JournalForm( props, toggle, picture, setPicture ){

  console.log(props)
  console.log(props.item)
  console.log(props.toggle)

  //used to collect value input from the user and populate the picture object.
  const [formValues, setFormValues] = useState({
    title: "",
    city: "",
    country: "",
    // date: null,
    content: "",
    imageURL: "",
  });

  //used to reset the form at the end.
  const initialState = {
    title: "",
    city: "",
    country: "",
    // date: null,
    content: "",
    imageURL: "",
  };

  // console.log(props.id)

  // useEffect(( props, toggle, setToggle, picture ) => {
  //   if (toggle === true) {
  //     //This is supposed to set the values in the form equal to the values listed at picture.item.id
  //     const editForm = picture.filter(picture => picture.id.toString() === props.id)[0]
  //     setFormValues(editForm)
  //   }
  // }, [toggle])


  
  // function addForm() {
  //   setFormValues(state =>({...state, id: props.id}))
  //   setPicture([ ...picture, formValues])
  // }

  // function updateForm() {
  //   setToggle(true);
  //   const updatedForm = picture.map(item => {
  //     if(item.id.toString() === props.id) {
  //       return formValues(item.id);
  //     }else {
  //       return item;
  //     }
  //   })
  //   setPicture(updatedForm)
  // }

  // useEffect(() => {
  //   if(toggle) {
  //     setFormValues(props.item)
  //   }
  // })


  function handleChange({ target: {name, value}}) {
   
    setFormValues({[name]: value})
    console.log(toggle)
  }

  function handleSubmit(e) {
    const user_id = localStorage.getItem('user')
    const post = {...formValues, user_id: user_id}
    e.preventDefault();
    
    //When we're submitting, we want to know if the submission is an edit or an added form.
    
    if(toggle) {
      const changes = {formValues}
      console.log(changes)
      axios()
        .put(`/posts/${props.item.id}`, formValues)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          props.addForm()
          console.log(err)
        })
    } else {
      axios()
      .post("/posts/", post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
    // props.addForm();
    setFormValues(initialState);
  }

  
  return(
      <div className='new-entry'>
        <Container>{ toggle ? <p>Editing</p> : <p> Adding </p>}</Container>
        
        <Container>
          
          <form onSubmit={handleSubmit}>
            
            <input 
              className="input-field" 
              name="title" 
              placeholder="title" 
              value={formValues.title}  
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