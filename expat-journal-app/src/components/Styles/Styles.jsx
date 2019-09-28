import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CardImg } from "reactstrap";
import Media from "../Styles/Media";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
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

    font-size: 62.5%;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: black;
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;
    border: .2rem solid white
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
  justify-content: center;
  align-items: center;
  ${Media.smallest` width: 70%;
    flex-direction: column;
    `}
  ${Media.small` width: 70%;
    flex-direction: column;
    `}
`;

export const NavItem = styled(NavLink)`
    display: flex;
    font-size: 1.3rem;
    text-shadow: 2px 2px 4px #000000;    
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 4.5rem;
    width: 1.5rem
    height: 4.6rem;
    
    color: white;
    ${Media.smallest`
    padding: 0;
    font-size: 1.5rem;
    height: 3rem;
    `}
    ${Media.small`
    padding: 0;
    font-size: 1.5rem;
    height: 3rem;
    `}
    
    :hover {
        transform: scale(1.1);
        color: lightgray;
    }
`;

export const Photo = styled(CardImg)`
  display: flex;

  margin: 0 auto;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

export const GridView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
