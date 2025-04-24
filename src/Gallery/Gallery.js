import react, { useState } from "react";
import "../Gallery/Gallery.css";

function Gallery() {
  const images = [
    "/assets/animal1.jpg",
    "/assets/animal2.jpg",
    "/assets/animal3.jpg",
    "/assets/animal4.jpg",
    "/assets/animal5.jpg",
    "/assets/animal6.jpg",
    "/assets/animal7.jpg",
    "/assets/animal8.jpg",
    "/assets/animal9.jpg",
    "/assets/animal10.jpg",
    "/assets/animal11.jpg",
    "/assets/animal12.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="thumbnail-row">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumbnail-${index}`}
            className={`thumbnail ${selectedIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {selectedIndex === null ? (
        <p className="info-text">Select an image to view it in large</p> // message when no image is selected
      ) : (
        <div>
          <div className="large-image-container">
            <img
              src={images[selectedIndex]}
              alt="selected"
              className="large-image"
            />
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrevious} aria-label="Previous Image">
              Previous
            </button>
            <button onClick={handleNext} aria-label="Next Image">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;