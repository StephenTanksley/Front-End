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
        <p>{entry.content}</p> <br />

        <button>Edit</button> <button>Delete</button>
      </CardBody>
    </Card>
  )
}
export default NewJournal;