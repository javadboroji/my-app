import React from "react";
import Image from "./Image";

export default function Galery({ images  }) {
  return (
    <div className="image-box">
      
      {images.map((item) => {
        return (
          <Image
            images={images}
            srcImage={item.webformatURL}
            id={item.id}
            key={item.id}
          
          />
        );
      })}
    </div>
  );
}
