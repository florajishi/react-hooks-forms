import React, { useState } from "react";

function Form({firstName, lastName, handleFormChange}) {

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFormChange}/>
      <input type="text" value={lastName} onChange={handleFormChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
