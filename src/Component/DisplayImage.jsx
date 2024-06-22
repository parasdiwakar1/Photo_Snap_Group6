import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageEditor from './ImageEditor'; // Adjust the import path as necessary

function DisplayImage() {
  const location = useLocation();
  const { file } = location.state || {};

  // const handleSave = () => {
    // Implement the save functionality here
  // };
  // console.log(file)

  return (
    
    <div>
      {file ? (
        <div>
          <h2>Selected Image</h2>
          <ImageEditor imageSrc={file} />
        </div>
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
}

export default DisplayImage;



