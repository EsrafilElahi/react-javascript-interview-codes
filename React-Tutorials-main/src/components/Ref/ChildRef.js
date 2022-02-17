import React from "react";

const ChildRef = React.forwardRef((props, ref) => (
  <div style={{ border: "1px solid red" }}>
    <h4>Child Ref:</h4>
    <input ref={ref} type="text" />
  </div>
));

export default ChildRef;
