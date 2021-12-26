import { Link, useLocation } from "react-router-dom";

import type { typeSingleGameData } from "../../Types";

import classes from "./GameThumbBox.module.scss";

const GameThumbBox = ({ gameId }: typeSingleGameData) => {
  const {search} = useLocation();

  
  return (
    <div className={classes.GameThumbBox}>
      <Link to={`/games/${gameId}${search}`}>
        <img
          src={`https://www.ourfastcdn.com/elegantgames/mygames/${gameId}/HTML5-Game/icon-256.png`}
          alt={gameId}
        />
      </Link>
    </div>
  );
};

export default GameThumbBox;
