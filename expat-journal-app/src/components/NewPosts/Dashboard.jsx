import React, {useEffect, useState} from 'react';
import {Container} from '../Styles/Styles'
import NewPostCard from './NewPostCard'
import {PostForm} from './PostForm'

//Creating the logic for a new post to be published.

// This component takes items in state and renders them into cards to be displayed in a grid.

const Dashboard = () => {

    const [posts, setPost] = ([])

return (
    <div>
        
        <Container>
            <h1>My Adventures</h1>
        </Container>

        {/* <PostForm /> */}
        {/*Where you input information to create a new card.*/}

 
        <NewPostCard />
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
    );
}

export default Dashboard;