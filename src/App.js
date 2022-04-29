import React, { useState, useEffect } from "react";
import "./App.css";
import Galery from "./Container/Galery";
import Axios from "axios";

//1-creat state *2- setState* 3- pass image url to galery component
//
function App() {
  const [images, setImages] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=27025191-12e5928258cd5371ba6502483&q=${input}&image_type=photo`
    ).then(
      (response) => {
        setImages(response.data.hits);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [input]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const btnTagsHandler=(e)=>{
    input.length>0&& setInput('');
    setInput(e.target.type)
  
  }

  return (
    <div className="App">
      <div className="main-box">
        <h2> Snap Shot</h2>
        <div className="search-box">
          <input
            placeholder="search..."
            type="text"
            className="inp-seacrh"
            value={input}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <ul>
         <a href="#"> <li type="Mountain" onClick={(e)=>btnTagsHandler(e)}> Mountain</li></a>

         <a href="#"> <li type="Beaches" onClick={(e)=>btnTagsHandler(e)}> Beaches</li></a>

         <a href="#"> <li type="Brids" onClick={(e)=>btnTagsHandler(e)}> Brids</li></a>

         <a href="#"><li type="Food" onClick={(e)=>btnTagsHandler(e)}> Food</li></a>
        </ul>
        <div className="title"> {input?<h3> Search : {input}</h3> : <h3>Title Pictures</h3>}</div>
        {images.length < 0 ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <Galery images={images} setImages={setImages} />
        )}
      </div>
    </div>
  );
}

export default App;
