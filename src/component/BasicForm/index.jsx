import React from "react";
import { useState } from "react";
import "./index.css";

const BasicForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submited, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmited(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submited && valid ? (
          <div className="success-message">
            Success! Thank you for register{" "}
          </div>
        ): null}
        <input
          value={values.firstName}
          onChange={handleChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {(submited && !values.firstName) ? <span>Please enter a first name</span> : null}
        <input
          value={values.lastName}
          onChange={handleChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {(submited && !values.firstName) ? <span>Please enter a first name</span> : null}
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {(submited && !values.firstName) ? <span>Please enter a first name</span> : null}
        <button class="form-field " type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
