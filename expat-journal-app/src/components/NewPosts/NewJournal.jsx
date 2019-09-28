import React from 'react'
import { Card, Container, Photo } from '../Styles/Styles'
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { axiosWithAuth as axios } from '../axiosutil'

// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const NewJournal = props => {
  // console.log(props);
  const entry = props.item
  const readableDate = new Date(entry.date)

  // console.log(entry.id);

  function handleEdit(e) {
    e.preventDefault()
    props.updateForm(entry)

    // console.log(props.updateForm(entry.item))
  }

  function handleDelete(e) {
    e.preventDefault()
    const user_id = entry.user_id
    axios()
      .delete(`/posts/${entry.id}/user/${user_id}`)
      .then(res => {
        alert('Journal entry has been deleted.')
        console.log(res)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    // call update posts to update list of posts
    props.updatePosts()
  }

  return (
    <Card>
      <Container>
      <CardBody>
        <Photo src={entry.imageURL} alt="a user supplied image" />
        <CardTitle>Title: {entry.title}</CardTitle>
        <br />
        <CardSubtitle>
          {entry.date && `Date: ${readableDate.toLocaleDateString()}`}
        </CardSubtitle>
        <p>{entry.content}</p> <br />
        <div>
          <button type="button" onClick={handleEdit}>
            {' '}
            Edit{' '}
          </button>

          <button type="button" onClick={handleDelete}>
            {' '}
            Delete{' '}
          </button>
        </div>
      </CardBody>
      </Container>
    </Card>
  )
}
export default NewJournal

// onClick={handleEdit}
