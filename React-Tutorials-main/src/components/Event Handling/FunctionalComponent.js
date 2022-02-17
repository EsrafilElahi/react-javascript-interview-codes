import React from "react";

export default function FunctionalComponent() {
  function clickHandler(event) {
    event.preventDefault();
    console.log("Form is Submitted!");
  }

  return (
    <div>
      <form onSubmit={(e) => clickHandler(e)}>
        <input type="text" name="" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
