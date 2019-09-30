import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CardImg } from "reactstrap";
import Media from "../Styles/Media";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  margin: 1rem;
  ${Media.smallest`
    padding: 0;
    margin: 0;
    font-size: .8rem
    padding-bottom: .5rem`}
  ${Media.small`
    padding: 0;
    margin: 0;
    font-size: .8rem
    padding-bottom: .5rem`}
`;

export const Card = styled.div`
    
    
    font-size: .9rem;
    line-height: 1.5rem;
    color: black;
    width: 40%;
    justify-content: space-evenly;
    align-items: center;
   
    margin: 1.3rem;
    border: .2rem solid gray;
    border-radius: .5rem;
    padding: .5rem;
    padding-top: 1rem;
    background-color: white;
    
    ${Media.smallest` width: 80%;
    font-size: .8rem;
    padding: .2rem;
    `}
    ${Media.small`width: 80%
    font-size: .8rem;
    padding: .2rem;`}
    ${Media.medium`width: 100%`}
    :hover{
        box-shadow: .9rem .9rem .9rem lightgray;
    }
`;

export const SomeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.7em;
`;

export const NavContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  background-color: lightgray;
  width: 100%;
  flex-wrap: wrap
  margin-bottom: .7rem;
  ${Media.tiny`
  ;`}
  
  }
`;

export const NavItem = styled(NavLink)`
    display: flex;
    font-size: 1.2rem;
    // border: .1rem solid white;
    text-shadow: 2px 2px 4px #000000;    
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 3.6rem;
    color: white;
    order: 2;
    ${Media.smallest`
    padding: 0;
    font-size: 1rem;
    
    `}
    ${Media.small`
    padding: 0;
    font-size: 1.5rem;
  
   
    `}
    ${Media.medium`
    padding: 0;
    font-size: 1rem;
    
   
    `}
    ${Media.tiny`
    font-size: .8rem;
    width: 33%;
    
    
    
  
    
  `}
    
    
    :hover {
        transform: scale(1.1);
        color: lightgray;
        cursor: pointer;
    }
`;

export const Photo = styled(CardImg)`
  border-radius: 0.5rem;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

export const GridView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const BrandTitle = styled.div`
font-size: 2rem;
display: flex;
font-size: 1.2rem;
    
text-shadow: 2px 2px 4px #000000;    
    
justify-content: center;
align-items: center;
text-decoration: none;
height: 3.6rem;
color: white;
order: 1;
${Media.medium`
font-size: 1.5rem;`}
${Media.small`
font-size: 1.2rem;
width: 100%`}
${Media.tiny`
width: 100%;
`}

`;
