import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import DisplayImage from './DisplayImage';
import Footer from './footer';

function AddImg() {
  const [photo, setPhoto] = useState(null);
  return (
    <>
    <Routes>
      <Route path="/" element={<ImageGallery setPhoto={setPhoto} />} />
      <Route path="/display" element={<DisplayImage photo={photo} />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default AddImg;
