import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

import '../../styles/Contact.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'name') {
      if (!name) {
        setErrorMessage(`Enter a valid name input `);
      } else {
        setErrorMessage('');
      }
      setName(inputValue);
    } else if (inputType === 'email') {
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage('');
      }
      setEmail(inputValue);
    } else {
      if (!message) {
        setErrorMessage(`Enter a valid message input `);
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name) {
      setErrorMessage(
        `Enter a valid name input `
      );
      return;
    }

    if (!message) {
      setErrorMessage(`Enter a valid message input`);
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className="p-3">Contact Page</h1>
      <div className="d-flex flex-column align-items-center">
        <h3 className="d-flex"> Feel free to reach out to me through email: </h3>
        <h3><a target="_blank" href="mailto:keyshawn.bhag@hotmail.com"> keyshawn.bhag@hotmail.com </a> </h3>
      </div>
      <form className="d-flex flex-column custom-form">
        <input
          className=""
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className=""
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div class="alert alert-warning custom-alert" role="alert">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
