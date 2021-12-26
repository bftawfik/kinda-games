import { useContext } from "react";

import { AppDataContext } from "../AppDataProvider/AppDataProvider";

import type { typeGamesGrid, typeAppProviderValue } from "../../Types";

import classes from "./GamesGrid.module.scss";

const GamesGrid = ({ card: Card }: typeGamesGrid) => {
  const { gamesData }: typeAppProviderValue = useContext(AppDataContext);
  return (
    <div className={classes.GamesGrid}>
      {gamesData &&
        gamesData.map((gameId, ndx) => (
          <Card key={ndx} gameId={gameId} />
        ))}
    </div>
  );
};

export default GamesGrid;
