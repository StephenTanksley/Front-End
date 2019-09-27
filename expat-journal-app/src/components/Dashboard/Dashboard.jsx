
import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Container, GridView } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm' 
import { axiosWithAuth as axios} from '../axiosutil';


//Dashboard assumes that you're already logged in and have a user in local storage and a token in local storage.
//Axios call is going to use axiosWithAuth
const Dashboard = () => {
  const [picture, setPicture] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({});
  const sortedPictures = picture.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  // console.log('Sorted pictures array', sortedPictures)

  const id = sortedPictures.map(item => {
    // console.log(item.id)
    return item.id;
  })

  useEffect(() => {
    axios()
      .get(`/posts`) // api goes here
      .then(response => {
        setPicture(response.data);
        // console.log(response.data)
       })
       .catch(error => {
         console.log(error);
       });
    }, []);

  
    function addForm() {
      // setFormValues(state =>({...state, id: props.id}))
      // setPicture([ ...picture, formValues])
      setToggle(false)
    }
  
    function updateForm(item) {
      setToggle(true);
      console.log(item)
      setItem(item)
      // const updatedForm = picture.map(item => {
      //   if(item.id.toString() === props.id) {
      //     return formValues(item.id);
      //   }else {
      //     return item;
      //   }
      // })
      // setPicture(updatedForm)
    }

        return (
 
        <div>

        <Container>
            <h1>My Adventures</h1>
        </Container>
              <JournalForm 
                toggle={toggle}
                item={item}
                picture={picture} 
                setPicture={setPicture}
                addForm={addForm} 
                id={id} /> 

            {/*This is the form where you input information to create a new card.*/}
            <GridView>
            {sortedPictures.map((item, index) => {
                return(
                    <NewJournal
                        item={item}
                        key={index}
                        id={item.id}
                        updateForm={updateForm} />
                )})}
                </GridView>
                
            </div>

        )

    }

export default Dashboard;
