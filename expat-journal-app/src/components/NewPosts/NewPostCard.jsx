import React from "react";
import {Card} from '../Styles/Styles' 
import {CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


// This component displays the elements of a user's post. This entirely presentational.
// There is no logic in this card at all. Just formatting the data provided by a user.

const CharacterCard = (props) => {
  const entry = props.item
  return (
    <Card>
      <CardBody>
        {/* <CardImg src={user_supplied.image} alt={user_supplied.description} /> */}
        <CardTitle><h3>Name: {entry.name}</h3></CardTitle><br />
          <CardSubtitle><h4>Date: {entry.date}</h4></CardSubtitle>
        <h5>Location (country, city): {entry.location}</h5><br />
        <h5>{entry.journal}</h5>
      </CardBody>
    </Card>
  )
}

export default CharacterCard;