import React, {useState, useEffect} from 'react'
import { Container } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm' 
import PictureList from '../PictureList/PictureList';


const Dashboard = () => {
    const [journal, setJournal] = useState([]);
    console.log(journal)

    useEffect(() => {
        if (journal.length === 0){
            if (localStorage.getItem('journal')){
                    setJournal(JSON.parse(localStorage.getItem('journal')));
                }
            }else {
                localStorage.setItem('journal', JSON.stringify(journal));
        }}, [])

    useEffect(() => {
        if(localStorage.getItem('journal') && JSON.parse(localStorage.getItem('journal').length !== journal.length))
        {
            localStorage.setItem('journal', JSON.stringify(journal));
        }}, [journal])

        return (
 
        <div>

            <Container>
                <h1>My Adventures</h1>
            </Container>

            <JournalForm journal={journal} setJournal={setJournal}/>
            {/*This is the form where you input information to create a new card.*/}

            {journal.map((item, index) => {
                return(
                    <NewJournal
                        item={item}
                        key={index} />
                )})}

                <PictureList/>
            </div>




        )

    }

export default Dashboard;