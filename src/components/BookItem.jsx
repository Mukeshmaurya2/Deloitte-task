import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BookItem.css";

const placeholderImage = "https://via.placeholder.com/100x150?text=No+Image";

const BookItem = ({ title, description, imageUrl }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="book-item" role="group" aria-label={`Book: ${title}`}>
      <img
        src={imageError || !imageUrl ? placeholderImage : imageUrl}
        alt={title}
        onError={() => setImageError(true)}
        className="book-image"
      />

      <div className="book-content">
        <h2 className="book-title">{title || "Untitled Book"}</h2>
        <button
          aria-expanded={showDescription}
          aria-controls={`desc-${title}`}
          onClick={() => setShowDescription((prev) => !prev)}
          className="toggle-btn"
        >
          {showDescription ? "Hide Details" : "Show Details"}
        </button>

        {showDescription && (
          <p id={`desc-${title}`} className="book-description">
            {description || "No description available."}
          </p>
        )}
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default BookItem;
