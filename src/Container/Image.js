import React from "react";
import './main.css'
export default function Image({ srcImage, id }) {
  //1-install bootstrap *2-bootstrap display in row 3 image* 3-show more image at 10 * 4-image give in link <a>
  /*</>*/
  return (
   
          <div className="image-box-inner">
            {(
              <>
              
              <a href={srcImage}>
              {" "}
              <img className="img" src={srcImage} alt={id} />
            </a>
              
              
              </>
            )}
          </div>
     
  );
}
