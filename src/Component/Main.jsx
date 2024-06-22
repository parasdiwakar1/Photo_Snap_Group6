import React from 'react';
import './Main.css'
function Main() {
  return (
    <>
      <div className='main-main'>
        <div className='main-page'>
          <div className='main-box'>
            <h3 className='main-h3'>Free online</h3>
            <h1 className='main-h1'>PHOTO EDITOR</h1>
            <h3 className='main-h3'>Image and Photo Editor</h3>
            <p className='main-p'>
              Easily edit images using the online photo editor in Adobe Express, your all-in-one AI content creation app. Turn your images into social posts, flyers, and more to stand out.
            </p>
            <div>
              <a href='/editor'>
                <button className='main-upload'>Upload Your Photo</button>
              </a>
            </div>
          </div>
        </div>
        {/* <marquee>
          <div className='main-imgbox'>
            <img className='main-img' src="https://cdn.movavi.io/products/0012/35/66acef39d14b038de96ba1f167c982f840077813.webp" alt="" />
            <img className='main-img' src="https://media.istockphoto.com/id/1560676006/photo/happy-indian-young-couple-taking-selfie-on-mobile-phone-by-holding-holi-color-plate-on-flower.jpg" alt="" />
            <img className='main-img' src="https://cdn.pixabay.com/photo/2017/08/28/09/33/photographer-2688934_640.jpg" alt="" />
            <img className='main-img' src="https://cdn.pixabay.com/photo/2016/03/21/09/06/mountains-1270138_640.jpg" alt="" />
            <img className='main-img' src="https://media.istockphoto.com/id/1387085834/photo/mother-taking-photo-of-her-baby.webp" alt="" />
            <img className='main-img' src="https://media.istockphoto.com/id/1444986188/photo/taking-a-selfie.webp" alt="" />
            <img className='main-img' src="https://media.istockphoto.com/id/1433665887/photo/young-woman-sitting-on-sofa-taking-photo-of-cat-on-window-sill.webp" alt="" />
            <img className='main-img' src="https://cdn.pixabay.com/photo/2016/01/19/18/07/photos-1150076_640.jpg" alt="" />
          </div>
        </marquee> */}
      </div>
    </>
  );
}

export default Main;
