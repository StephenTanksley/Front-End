import React, {useState, useEffect} from 'react'
import NewJournal from '../NewPosts/NewJournal'
import JournalForm from '../NewPosts/JournalForm'

//Dashboard assumes that you're already logged in and have a user in local storage and a token in local storage.
//Axios call is going to use axiosWithAuth
const Dashboard = () => {
    const [journal, setJournal] = useState([]);
    console.log('journal array from Dashboard', journal)

    





        return (
 
        <div>

            <JournalForm journal={journal} setJournal={setJournal}/>
            {/*This is the form where you input information to create a new card.*/}

            {journal.map((item, index) => {
                return(
                    <NewJournal
                        item={item}
                        key={index} />
                )})}

            </div>

        )

    }

export default Dashboard;