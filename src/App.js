import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Validation from "./UserValidation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: 40,
          color: "coral",
        }}
      >
        FORMIK Example
      </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          birthDate: "",
          age: "",
        }}
        validationSchema={Validation}
        onSubmit={(fields) => {
          console.log(fields);
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Field name="firstName" type="text" placeholder="First Name" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <Field name="lastName" type="text" placeholder="Last Name" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage
            name="email"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <Field name="password" type="text" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <Field name="birthDate" type="date" placeholder="Birth Date" />
          <ErrorMessage
            name="birthDate"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <Field name="age" type="number" placeholder="Age" />
          <ErrorMessage
            name="age"
            component="div"
            className="invalid-feedback"
            style={{ color: "red", fontWeight: "bold" }}
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
