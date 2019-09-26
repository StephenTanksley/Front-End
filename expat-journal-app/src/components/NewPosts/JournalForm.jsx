import React, { useState } from "react";
import { Container } from "../Styles/Styles";
import { axiosWithAuth as axios } from "../axiosutil";
import { Card } from "react";
//Keep working without auth, but know that we're putting auth back in.

//This component accepts user input. This is our form.
const JournalForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    city: "",
    country: "",
    date: null,
    content: "",
    imageURL: "",
    user_id: ""
  });

  const initialState = {
    title: "",
    city: "",
    country: "",
    date: null,
    content: "",
    imageURL: "",
    user_id: ""
  };

  function handleChange({ target: { name, value } }) {
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormValues(state => ({ ...state }));
    console.log(formValues);
    // setJournal([ ...journal, formValues])

    axios()
      .post("/posts", formValues)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    setFormValues(initialState);
    // console.log('current form values', formValues);
  }

  return (
    <div className="new-entry">
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            name="title"
            placeholder="title"
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            className="input-field"
            name="imageURL"
            placeholder="picture URL"
            value={formValues.imageURL}
            onChange={handleChange}
          />{" "}
          <br />
          {/* <input className="input-field"name="date" placeholder="date" value={formValues.date} onChange={handleChange} /><br /> */}
          <input
            className="input-field"
            name="city"
            placeholder="city"
            value={formValues.city}
            onChange={handleChange}
          />
          <input
            className="input-field"
            name="country"
            placeholder="country"
            value={formValues.country}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            className="input-field description"
            name="content"
            placeholder="describe your journey"
            type="text"
            size="50"
            value={formValues.content}
            onChange={handleChange}
          />
          <Container>
            <button className="submit-button" type="submit">
              Share your Story!
            </button>
          </Container>
        </form>
      </Container>
    </div>
  );
};

export default JournalForm;
