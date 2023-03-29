import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const FormContainer = () => {
  const { formDt } = useSelector((state) => state.nameList);
  return (
    <div>
      <h3>FormContainer</h3>
      <p>You are typing {formDt}</p>
      <hr />
      <Form />
    </div>
  );
};

export default FormContainer;
