import React, { useState, useEffect } from "react";

function Responsive() {
  const [windowWidth, setWindowWidth] = useState();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className={windowWidth < "480px" ? "mobile" : "desktop"}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <h1>hello world</h1>
    </div>
  );
}

export default Responsive;

// .mobile  ---> setStyle for mobile breakPoint
// .desktop  ---> setStyle for desktop breakPoint
