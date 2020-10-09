import React from 'react';

const StarshipPoster = ({ poster }) => {
  const trim = (word) => {
    let trimmed = ""
    for (let letter of word) {
      if (letter === " ") {
        trimmed += "";
      } else {

        trimmed += letter;
      }
    }
    return trimmed;
  }
  return (
    <div className="poster">

      <img src={
        (poster === 'N/A') ? "/images/notfound.png" : `/images/${trim(poster)}.png`
      }
        alt="starship poster"
      />
    </div>
  )

};

export default StarshipPoster;