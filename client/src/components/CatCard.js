import React, { useState } from 'react';
import '../App.css';

function CatCard({ imgUrl, quote, type }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Determine base background class (from type)
  const baseClass = {
    nice: 'nice-cat',
    mean: 'mean-cat',
    badass: 'badass-cat'
  }[type];

  // Determine dynamic border class based on state
  const hoverClass = {
    nice: 'blue-border',
    mean: 'red-border',
    badass: 'green-border'
  }[type];

  const permClass = {
    nice: 'perm-blue-border',
    mean: 'perm-red-border',
    badass: 'perm-green-border'
  }[type];

  const borderClass = isClicked
    ? permClass
    : isHovered
    ? hoverClass
    : '';

  return (
    <div
      className={`single-cat-container ${baseClass} ${borderClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <img src={imgUrl} alt="A cat" className="cat-img" />
      <p className="cat-quote">{quote}</p>
    </div>
  );
}

export default CatCard;