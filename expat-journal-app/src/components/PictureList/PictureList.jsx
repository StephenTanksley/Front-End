import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, GridView} from '../Styles/Styles' 
import {CardImg, CardBody,
  CardTitle, CardSubtitle, CardLink} from 'reactstrap';
export default function PictureList(props) {

  const [picture, setPicture] = useState([]);
  
  useEffect(() => {
    
    axios
      .get(`https://be-expat-journal.herokuapp.com/api/posts`)// api goes here
      .then(response => {
        setPicture(response.data);
        console.log(response.data);
        console.log(response.data.imageUrl)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <GridView>
      {picture.map((item, id) => (
        
            <Card>
            <CardBody>
              <CardTitle>
               
                <p key={item.id}>Title: {item.title}</p>
              </CardTitle>
             <CardTitle>
                
                <p key={item.id}>Location:{item.city}, {item.country}</p>{" "}
              </CardTitle>
                <CardLink>
                  <img src={item.imageURL}/>
                </CardLink>
                <CardTitle>
                  <p key={item.id}>Description:{item.content} </p>
                </CardTitle>
            </CardBody>
            </Card>
        
      ))}
    </GridView>
  );
}