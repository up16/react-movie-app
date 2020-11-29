import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from '../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    { url: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg', rating: 5.7 },
    { url: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/the-favourite-TFAV_Cape_Frame_Online_PosterFIN1_rgb.jpg', rating: 9.0 },
    { url: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg', rating: 8.9 }
  ];
  const [currentPage, setCurrentpage] = useState(1);
  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentpage((prev) => prev - 1);
    } else {
      setCurrentpage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
