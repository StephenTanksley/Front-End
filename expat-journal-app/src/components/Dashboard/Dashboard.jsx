import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import { Container, GridView } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm' 
import { axiosWithoutAuth as axios} from '../axiosutil';


//Dashboard assumes that you're already logged in and have a user in local storage and a token in local storage.
//Axios call is going to use axiosWithAuth
const Dashboard = () => {
    
    const [picture, setPicture] = useState([]);

    const sortedPictures = picture.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
       
    useEffect(() => {
     
     axios()
       .get(`/posts`)// api goes here
       .then(response => {
         setPicture(response.data);
         
         console.log(response.data);
        //  console.log(response.data.imageUrl)
       })
       .catch(error => {
         console.log(error);
       });
    }, []);
   
        return (
 
        <div>

        <Container>
            <h1>My Adventures</h1>
        </Container>

        <Switch>
            <Route path='/' render={props => <JournalForm picture={picture} setPicture={setPicture} /> } />
            <Route path='/edit/:id' render={props => <JournalForm picture={picture} setPicture={setPicture} /> } />
        </Switch>    

            {/*This is the form where you input information to create a new card.*/}
            <GridView>
            {sortedPictures.map((item, index) => {
                return(
                    <NewJournal
                        item={item}
                        key={index} />
                )})}
                </GridView>
                
            </div>

        )

    }

export default Dashboard;