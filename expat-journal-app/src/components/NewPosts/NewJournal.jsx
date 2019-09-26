import React from "react";
import {Card, Photo} from '../Styles/Styles' 
import {CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {axiosWithAuth as axios} from '../axiosutil'


// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const NewJournal = (props) => {
  console.log(props);
  const entry = props.item
  const id = props.item.id
  // console.log(entry);

  function handleDelete(e) {
    e.preventDefault();
    axios()
      .delete(`/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  return (
    <Card>
      <CardBody>
        <Photo src={entry.imageURL} alt="a user supplied image" />
        <CardTitle>Title: {entry.title}</CardTitle><br /> 
        <CardSubtitle><p>Date: {entry.date}</p></CardSubtitle>
        <p>{entry.content}</p> <br />

        <button type="submit" >Edit</button> <button type="submit" onClick={handleDelete} >Delete</button>

      </CardBody>
    </Card>
  )
}
export default NewJournal;