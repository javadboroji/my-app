import React, { useEffect, useState } from "react";
import axios from "axios";
export default function () {
  const [pic, setPic] = useState([]);

  const [input, setInput] = useState("");

  
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=27025191-12e5928258cd5371ba6502483&q=${input}&image_type=photo`).then(
      (res) => {
        setPic(res.data.hits);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [input]);

  const submiteHandler = (e) => {
    e.preventDefault();
    
   
    };
  return (
    <div>
      <form onSubmit={submiteHandler}>
        <input
          placeholder="search..."
          type="text"
          className="inp-seacrh"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {pic &&
        pic.map((item) => {
          return (
            <>
              {" "}
              <img key={item.id} src={item.webformatURL} alt={item.id} />
            </>
          );
        })}
    </div>
  );
}
