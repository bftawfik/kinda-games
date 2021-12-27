import { useContext, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

import Redirect from "../../Components/Redirect/Redirect";

import type { typeAppProviderValue } from "../../Types";

import { AppDataContext } from "../../Components/AppDataProvider/AppDataProvider";

import classes from "./SingleGame.module.scss";

const SingleGame = () => {
  let { gameId } = useParams();
  const { userData, externalUrl, gamesData }: typeAppProviderValue =
    useContext(AppDataContext);
  const navigate = useNavigate();
  if (!userData?.isSubscribed) {
    navigate("/");
  }

  const divRef = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullscreen] = useState<boolean | undefined>(false);

  return userData?.isSubscribed ? (
    <div className={classes.SingleGame} ref={divRef}>
      <button
        onClick={(e) => {
          var document: any = window.document;
          var singleGame: any = divRef.current;
          if (fullscreen) {
            if (singleGame.exitFullscreen) {
              singleGame.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              /* Safari */
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
              /* IE11 */
              document.msExitFullscreen();
            }
            setFullscreen(false);
          } else if (fullscreen === false) {
            if (singleGame.requestFullscreen) {
              singleGame.requestFullscreen();
            } else if (singleGame.webkitRequestFullscreen) {
              /* Safari */
              singleGame.webkitRequestFullscreen();
            } else if (singleGame.msRequestFullscreen) {
              /* IE11 */
              singleGame.msRequestFullscreen();
            }
            setFullscreen(true);
          }
        }}
      >
        {!!fullscreen ? (
          <FontAwesomeIcon icon={faCompress} />
        ) : (
          <FontAwesomeIcon icon={faExpand} />
        )}
      </button>
      {gamesData && gameId && (
        <iframe
          src={`https://www.ourfastcdn.com/kindagames/mygames/${
            gamesData[`${gameId}`]
          }/HTML5-Game/index.html`}
          title={gamesData[`${gameId}`]}
        />
      )}
    </div>
  ) : (
    <Redirect externalUrl={externalUrl} />
  );
};

export default SingleGame;
