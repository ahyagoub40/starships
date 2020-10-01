import React from 'react';
import StarshipPoster from './starship-poster';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const Starship = ({ name }) => {
  return (
    <div>
      <GridListTile >
        <StarshipPoster poster={name} />
        <GridListTileBar
          title={name}
        />
      </GridListTile>
    </div>
  )
};

export default Starship;