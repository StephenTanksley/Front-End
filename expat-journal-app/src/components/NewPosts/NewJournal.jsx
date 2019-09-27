import React from "react";
import {Card, Photo} from '../Styles/Styles' 
import {CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom'
import {axiosWithAuth as axios} from '../axiosutil'


// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const NewJournal = props => {
  // console.log(props);
  const entry = props.item
  
  // console.log(entry.id);

  function handleDelete(e) {
    e.preventDefault();
    const user_id = entry.user_id
    axios()
      .delete(`/posts/${entry.id}/user/${user_id}`)
      .then(res => {
        alert('Journal entry has been deleted.')
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <Card>
      <CardBody>
        <Photo src={entry.imageURL} alt="a user supplied image" />
        <CardTitle>Title: {entry.title}</CardTitle>
        <br />
        <CardSubtitle>
          <p>Date: {entry.date}</p>
        </CardSubtitle>
        <p>{entry.content}</p> <br />

        <div>
          <button type="submit" > <Link to={`/edit/${entry.id}`} > Edit  </Link> </button> 
      
          <button type="submit" onClick={handleDelete} > Delete </button>
        </div>

      </CardBody>
    </Card>
  );
};
export default NewJournal;

// onClick={handleEdit}