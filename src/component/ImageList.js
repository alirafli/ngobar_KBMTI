import React,{useEffect, useState} from "react";
import unsplash from "../api/unsplash";

const ImageList = () => {
   const [listOfImage, setListOfImage] = useState([]);
   const imageArray = JSON.stringify(listOfImage);
   useEffect(() => {
      const fetchImage = async () => {
         const res = await unsplash.get(`/photos`, {
            params : {per_page: 12 }
         });
         setListOfImage(res.data)
      }
      fetchImage()
   }, [imageArray]);
  const images = [0, 1, 2, 3, 4, 5];
  return (
    <div className="ui three column stackable grid">
      {listOfImage.map((image) => (
        <div className="column">
          <img
            className="ui centered image"
            src={image.urls.regular}
            key={image.id}
            style={{ height: 350, width: 350, objectFit: "hover"}}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
