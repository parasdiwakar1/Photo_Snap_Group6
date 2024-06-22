// src/components/cropImage.js
export default async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(img);
    img.onerror = error => reject(error);
  });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const safeArea = Math.max(image.width, image.height) * 2;

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.drawImage(image, (safeArea - image.width) / 2, (safeArea - image.height) / 2);

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(data, Math.round(0 - (safeArea / 2 - pixelCrop.x)), Math.round(0 - (safeArea / 2 - pixelCrop.y)));

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob));
    }, 'image/png');
  });
}
