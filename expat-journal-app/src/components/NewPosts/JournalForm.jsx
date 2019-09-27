
import React, { useState, useEffect } from 'react'
import { Container } from '../Styles/Styles'
import { axiosWithAuth as axios } from '../axiosutil';

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
    content: "",
    imageURL: "",
  });

  //used to reset the form at the end.
  const initialState = {
    title: "",
    city: "",
    country: "",
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

  //When we change an item in the form, we use this to update values in state.
  function handleChange({ target: {name, value}}) {
    setFormValues({...formValues, [name]: value})
    console.log(toggle)
  }

  //When we're submitting the form, we want to get the userID and attach it to the formValues object.
  function handleSubmit(e) {
    const user_id = localStorage.getItem('user')
    const post = {...formValues, user_id: user_id}
    const changes = {...formValues, user_id: props.item.user_id}
    console.log(changes)
    e.preventDefault();
    
    //When we're submitting, we want to know if the submission is an edit or an added form.
    if(props.toggle === true) {
      axios()
      .put(`/posts/${props.item.id}`, formValues)
      .then(res => {
        console.log('put request')
        console.log(res)
      })
      .catch(err => {
        // should props.addForm() go up into the .then()?
        props.addForm() 
        console.log(err)
      })

    } else {
      axios()
      .post("/posts/", post)
      .then(response => {

        console.log('post request')
        console.log(response);
        //no need to use props.addForm() here since we're already not in edit mode.
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
        <Container>{ props.toggle ? <p> Editing </p> : <p> Adding </p>}</Container>
        
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