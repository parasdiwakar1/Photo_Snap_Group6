import React, { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage'; // Assuming you have a function to crop images
import './Editor.css'; // Import your CSS file for styling

const DEFAULT_OPTIONS = [
  { name: 'Brightness', property: 'brightness', value: 100, range: { min: 0, max: 200 }, unit: '%' },
  { name: 'Contrast', property: 'contrast', value: 100, range: { min: 0, max: 200 }, unit: '%' },
  { name: 'Saturation', property: 'saturate', value: 100, range: { min: 0, max: 200 }, unit: '%' },
  { name: 'Grayscale', property: 'grayscale', value: 0, range: { min: 0, max: 100 }, unit: '%' },
  { name: 'Sepia', property: 'sepia', value: 0, range: { min: 0, max: 100 }, unit: '%' },
  { name: 'Hue Rotate', property: 'hue-rotate', value: 0, range: { min: 0, max: 360 }, unit: 'deg' },
  { name: 'Blur', property: 'blur', value: 0, range: { min: 0, max: 20 }, unit: 'px' }
];

const ImageEditor = ({ imageSrc }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState({ horizontal: false, vertical: false });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [aspect, setAspect] = useState(4 / 3);
  const [height, setHeight] = useState(4);
  const [width, setWidth] = useState(3);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onDownloadCroppedImage = useCallback(async () => {
    try {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Adjust canvas dimensions to match the cropped area
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        // Apply filters and transformations
        const filters = options.map(option => `${option.property}(${option.value}${option.unit})`).join(' ');
        context.filter = filters;
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate((rotation * Math.PI) / 180);
        context.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);

        // Draw the image inside the cropped area
        context.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          -croppedAreaPixels.width / 2,
          -croppedAreaPixels.height / 2,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        // Create a download link
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'editedImage.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    } catch (e) {
      console.error('Error downloading image:', e);
    }
  }, [imageSrc, croppedAreaPixels, rotation, options, flip]);

  const onRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360); // Rotate 90 degrees each click
  };

  const onFlipHorizontal = () => {
    setFlip(prevFlip => ({ ...prevFlip, horizontal: !prevFlip.horizontal }));
  };

  const onFlipVertical = () => {
    setFlip(prevFlip => ({ ...prevFlip, vertical: !prevFlip.vertical }));
  };

  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleWidthChange = (e) => {
    setWidth(Number(e.target.value));
  };

  const handleSliderChange = ({ target }) => {
    setOptions(prevOptions =>
      prevOptions.map((option, index) =>
        index !== selectedOptionIndex ? option : { ...option, value: target.value }
      )
    );
  };

  const getImageStyle = () => {
    const filters = options.map(option => `${option.property}(${option.value}${option.unit})`).join(' ');
    return { filter: filters, transform: `rotate(${rotation}deg) scaleX(${flip.horizontal ? -1 : 1}) scaleY(${flip.vertical ? -1 : 1})` };
  };

  useEffect(() => {
    if (height > 0 && width > 0) {
      setAspect(height / width);
    }
  }, [height, width]);

  return (
    <div className='editor-main'>
      <div className="image-editor">
        {imageSrc && (
          <>
            <div className="crop-container">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape="rect"
                showGrid={false}
              />
            </div>
            <div className="controls">
              <button className='rotate' onClick={onRotate}>Rotate</button>
              <button className='flip' onClick={onFlipHorizontal}>Flip Horizontal</button>
              <button className='flip' onClick={onFlipVertical}>Flip Vertical</button>
            </div>
            <div className='dimension-inputs'>
              <label className='h-text' htmlFor="Height">Height:</label>
              <input type="number" className='img-h' value={height} onChange={handleHeightChange} />
              <label className='h-text' htmlFor="Width">Width:</label>
              <input type="number" value={width} className='img-w' onChange={handleWidthChange} />
            </div>
            <button className='download' onClick={onDownloadCroppedImage}>Download Edited Image</button>
          </>
        )}
      </div>
      {imageSrc && (
        <div className="filters">
          <div className="sidebar">
            {options.map((option, index) => (
              <div key={index} className={index === selectedOptionIndex ? 'active' : ''} onClick={() => setSelectedOptionIndex(index)}>
                {option.name}
              </div>
            ))}
          </div>
          <div className="slider-container">
            <input
              type="range"
              min={options[selectedOptionIndex].range.min}
              max={options[selectedOptionIndex].range.max}
              value={options[selectedOptionIndex].value}
              onChange={handleSliderChange}
            />
          </div>
          <div className="preview">
            <img src={imageSrc} alt="Preview" style={getImageStyle()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
