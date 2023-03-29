import React from "react";
import { Dispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(setFormDt(value));
  };
const hadnleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(setDtList())
}
  return (
    <div>
      <form action="">
        <input type="text" onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default Form;
