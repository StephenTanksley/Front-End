import React, {useState, useEffect} from 'react'
import { Container, GridView } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm' 
import { axiosWithoutAuth as axios} from '../axiosutil';


const Dashboard = () => {
    
    

    const [picture, setPicture] = useState([]);

    const sortedPictures = picture.sort((a,b) => new Date(b.create_at) - new Date(a.created_at))
       
 useEffect(() => {
     
     axios()
       .get(`https://be-expat-journal.herokuapp.com/api/posts`)// api goes here
       .then(response => {
         setPicture(response.data);
         
         console.log(response.data);
         console.log(response.data.imageUrl)
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
            
            <JournalForm picture={picture} setPicture={setPicture} />
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