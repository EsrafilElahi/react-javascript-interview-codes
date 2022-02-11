// به مقادیر یک المنت دسترسی داشته باشیم

import React, { useRef, useEffect } from "react";

function Ref() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Ref;
