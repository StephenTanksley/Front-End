
import React, {useState, useEffect} from 'react'
import { Container, GridView } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm' 
import { axiosWithAuth as axios} from '../axiosutil';


//Dashboard assumes that you're already logged in and have a user in local storage and a token in local storage.
const Dashboard = () => {
  const [picture, setPicture] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({});
  const sortedPictures = picture.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

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
      setToggle(false)
    }
  
    function updateForm(item) {
      setToggle(true);
      
      setItem(item)
      console.log(item)
      
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
