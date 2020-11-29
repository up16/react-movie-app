/* eslint-disable react/prop-types */
import React from 'react';
import './Grid.scss';
import Rating from '../rating/Rating';

const Grid = (props) => {
  const { images } = props;
  return (
    <>
      <div className="grid">
        {images.map((image, i) => (
          <div key={i}>
            <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <a>Read More</a>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">Mission possible</span>
                <div className="grid-detail-rating">
                  <Rating rating={image.rating} totalStars={5} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
