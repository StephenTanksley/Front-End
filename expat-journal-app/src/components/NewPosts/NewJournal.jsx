import React from "react";
import {Card, Photo} from '../Styles/Styles' 
import {CardBody, CardTitle, CardSubtitle} from 'reactstrap';


// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const NewJournal = (props) => {
  // console.log(props);
  const entry = props.item
  // console.log(entry);
  return (
    <Card>
      <CardBody>
        <Photo src={entry.imageURL} alt="a user supplied image" />
        <CardTitle>Title: {entry.title}</CardTitle><br /> 
        <CardSubtitle><p>Date: {entry.date}</p></CardSubtitle>
        <p></p>
        <p>{entry.content}</p>

      </CardBody>
    </Card>
  )
}
export default NewJournal;
















// <img src="https://placekitten.com/350/350" alt="an adorable cat from Istanbul" />
// <CardTitle><h3>Stan Stanleyson</h3></CardTitle>
// <CardSubtitle><h4>Date: 05/15/2015</h4></CardSubtitle>
// <h5>Location (city, country): Istanbul, Turkey</h5>
// <h5>"This is a picture of one of the many cats I saw in my trip to Istanbul. It was super cute and I was drinking blahblahblh"</h5>