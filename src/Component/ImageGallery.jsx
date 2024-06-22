
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './ImageGallary.css'

function ImageGallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      navigate('/editor/display', { state: { file: URL.createObjectURL(file) } });
    }
  };

  return (
    <div className='Img_container'>
      <div className='second-container'>
        <div className='img_left-box'>
          <img src="https://play-lh.googleusercontent.com/XVXiONN7L9fT7NdnD0mALY65KOuPvLVzG3_oFiyU-hRaliLwazp0Fq8mMeGZqFW0Xw" alt="placeholder"></img>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="fileInput"
            onChange={handleImageSelect}
          />
          <label className='blue-btn' htmlFor="fileInput">+ add Image</label>
          <p>You can edit your photo</p>
        </div>

        <div className='img_right-box'>
          <h1>Modern AI Powered Photo Editor for Quick and Professional Edits</h1>
          <div className='star'>★ ★ ★ ★ ★</div>
          <p>Welcome to the free modern AI powered photo editor by Pixlr. Start editing by clicking on the open photo button, drag n' drop a file or paste from the clipboard (ctrl+v).</p>
        </div>
      </div>

      <div className='row-1'>
        <div className='video-f'>
          <h1>What is AI Photo Editor?</h1>
          <p>Transform your photos with Photo AI's Advanced AI Background Editor. <br />Experience the seamless removal of backgrounds with precision. <br />You can add in a solid color backgrounds for your product shots or create stunniung landscapes with custom AI Backgrounds.<br /> Or Even teleport yourself to a serene beach or a snow clad mountain peak. <br />Elevate your shots and achieve professional-quality results in every edit.<br /> Upload a photo now for the best photo editing experience.</p>
          <ReactPlayer
            url="https://storyblok-cdn.photoroom.com/f/191576/x/7bd3e13ce7/hype-video-16x9_h264.mp4"
            playing={true}
            loop={true}
            controls={true}
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      </div>
      <div className='main-body'>
        <div className='second-row'>
          <div className="player-wrapper">
            <img className='Rukhsana'src="https://strapi-wasabi-bucket.apyhi.com/Remove_Object_7ace9b3e32.webp"></img>

          </div>
          <div className='text-p'>
            <h1>Remove Object</h1>
            <p>Our AI-powered device specializes in putting off unwanted factors out of your pics,<br /> permitting your main subject to shine.<br /> With precision and simplicity, <br />it erases distractions, ensuring your images are ideal. <br />Give it a try to witness the electricity of object removal in action.</p>
          </div>
        </div>
      </div>

      <div className='main-body'>
        <div className='second-row'>
          <div className="player-wrapper">
            <div className='text-p'>
            <h1>Replace Object</h1>
            <p>Revolutionize your images by seamlessly replacing or adding elements in a picture. Our AI editor allows for creative transformations while keeping a natural look, perfect for product photos and your professional shots. Experience the magic of AI-driven object replacement today using AI Photo Editor.</p>
            </div>
          </div>
          <img className='Imagee' src="https://strapi-wasabi-bucket.apyhi.com/Replace_Object_v2_1_10189579fd.webp"></img>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
