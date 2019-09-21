import React, {useEffect, useState} from 'react';
import { withFormik, Form, Field, } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import {Container, Card} from '../Styles/Styles'
import {NewPostCard} from './NewPostCard'
import TextField from '@material-ui/core/TextField';
import App from "../../src/App.css"


//Creating the logic for a new post to be published.

// Need to determine the method for generating a user token and setting the token to local storage.css

// This component takes items in state and renders them into cards to be displayed in a grid.

const Post = () => {

    const [posts, setPost] = ([])

return (
    <div>
        <Container>
            <h1>My Adventures</h1>
        </Container>

        <Container> 
            {posts.map((item, index) => {
                return (
                <NewPostCard 
                    item = {item}
                    key = {index} />
                )})}
        </Container>
        </div>
    );
}

export default Post;