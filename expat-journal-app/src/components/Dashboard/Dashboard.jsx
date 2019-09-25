import React, {useState, useEffect} from 'react'
import { Container } from '../Styles/Styles'
import NewJournal from '../NewPosts/NewJournal'
import JournalPost from '../NewPosts/JournalPost' 


const Dashboard = () => {
    const [journal, setJournal] = useState([]);

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

            <JournalPost journal={journal} setJournal={setJournal}/>
            {/*Where you input information to create a new card.*/}

    
            <NewJournal />
            {/*Form map contained below. This will map through existing data in posts and display it using cards. This is what creates our grid.*/}
            {/* <Container>
            {posts.map((item, index) => {
                    return (
                    <NewPostCard 
                        item = {item}
                        key = {index} />
                    )})}
            </Container> */}

            </div>




        )

    }

export default Dashboard;