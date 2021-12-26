import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import { Default } from "react-spinners-css";

import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <FulscrnWrpr className={classes.Loading} containerClassName={classes.container}>
      <div className={classes.contents}>
        <Default />
      </div>
    </FulscrnWrpr>
  );
};

export default Loading;
