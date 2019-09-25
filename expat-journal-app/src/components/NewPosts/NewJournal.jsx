import React from "react";
import {Card} from '../Styles/Styles' 
import {CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const NewJournal = (props) => {
  const entry = props.item
  return (
    <Card>
      <CardBody>

        <img src="https://placekitten.com/350/350" alt="an adorable cat from Istanbul" />
        <CardTitle><h3>Stan Stanleyson</h3></CardTitle>
        <CardSubtitle><h4>Date: 05/15/2015</h4></CardSubtitle>
        <h5>Location (city, country): Istanbul, Turkey</h5>
        <h5>"This is a picture of one of the many cats I saw in my trip to Istanbul. It was super cute and I was drinking blahblahblh"</h5>


        {/* <CardImg src={user_supplied.image} alt={user_supplied.description} /> This is placeholder! */}
        {/* This is going to be taken from the user object. */}
       
        {/* <CardTitle><h3>{entry.name}</h3></CardTitle><br />  */}
        {/* <CardSubtitle><h4>Date: {entry.date}</h4></CardSubtitle>
        <h5>Location (country, city): {entry.location}</h5><br />
        <h5>{entry.description}</h5> */}
        
      

      </CardBody>
    </Card>
  )
}
export default NewJournal;