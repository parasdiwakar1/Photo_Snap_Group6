import React, { useState, useEffect } from 'react';
import './Animation.css';

function FeatureCard({ icon, title, description, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`feature-card ${visible ? 'visible' : ''}`}>
      <div className="icon-wrapper">
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

function Animation() {
  return (
      <div className="a_container">
        <div className="left-side">
          <FeatureCard
            icon={<img src="https://cdn.prod.website-files.com/636262ce4020a11b550465ba/636262ce4020a16f73046608_Vector%20130%20(Stroke).svg" alt="" />}
            title="Animate any photo"
            description="Take any static image and add movement to it with a swipe of your finger. Create fun GIFs and videos to share with your followers."
            delay={1000} // 1 second delay
          />
          <FeatureCard
            icon={<img src="https://cdn.prod.website-files.com/636262ce4020a11b550465ba/636262ce4020a16f73046608_Vector%20130%20(Stroke).svg" alt="" />}
            title="All in one app"
            description="By integrating Motionleap capabilities into the Photoleap editor, you get all the tools you need in one place. No need to jump between apps!"
            delay={2000} // 2 seconds delay
          />
        </div>
        <div className="right-side">
          <div className="phone-mockup">
            <div className="video-container">
              <video id="video" autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="https://cdn.prod.website-files.com/62b48d9033eee452dce0e967/637231e4389c7af2ada25d05_TearDropZ-jumper_WEB-transcode.mp4" type="video/mp4" data-wf-ignore="true" />
                <source src="https://cdn.prod.website-files.com/62b48d9033eee452dce0e967/637231e4389c7af2ada25d05_TearDropZ-jumper_WEB-transcode.webm" type="video/webm" data-wf-ignore="true" />
              </video>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Animation;

