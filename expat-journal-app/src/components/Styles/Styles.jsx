import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
`;


export const Card = styled.div`

    font-size: 62.5%;
    font-size: 1.3rem;
    line-height: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    width: auto;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    border: .2rem solid white
    margin: 1rem;
    border: .3rem solid gray;
    border-radius: 1rem;
    padding: 1.5rem;
    background-color: white;

    :hover{
        box-shadow: .9rem .9rem .9rem #52a934;
    }
`;

export const SomeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.7em;
`;
