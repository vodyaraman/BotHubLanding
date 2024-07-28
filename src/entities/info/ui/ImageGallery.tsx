import React from "react";

const ImageGallery: React.FC = () => {
  return (
    <div className="image-gallery">
      <div className="image-item image-item-1">
        <img src="image1.png" alt="Image 1" className="gallery-image gallery-image-1" />
      </div>
      <div className="image-item image-item-2">
        <img src="image2.png" alt="Image 2" className="gallery-image gallery-image-2" />
      </div>
      <div className="image-item image-item-3">
        <img src="image3.png" alt="Image 3" className="gallery-image gallery-image-3" />
      </div>
    </div>
  );
};

export default ImageGallery;


