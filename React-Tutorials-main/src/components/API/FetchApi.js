import React, { useState, useEffect } from "react";

function FetchAPI() {
  
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  //Post Method
  const apiPost = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        userId: parseInt(inputs.userId),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };

  //   useEffect(() => {
  //     apiGet();
  //   }, []);

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="userId"
            placeholder="userId"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default FetchAPI;
