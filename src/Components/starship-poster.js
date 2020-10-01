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

    <img src={
      (poster === 'N/A') ? "/images/notfound.png" : `/images/${trim(poster)}.png`
    }
      alt="starship poster"
      width="300px" heigth="600px" margin="10px"
    />
  )

};

export default StarshipPoster;