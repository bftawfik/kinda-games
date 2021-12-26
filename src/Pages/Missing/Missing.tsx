import { Link } from "react-router-dom";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";

import classes from "./Missing.module.scss";

const Missing = () => {
  return (
    <FulscrnWrpr
      className={classes.Missing}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>
          <span>الصفحة غير موجودة</span>
          <span>(404)</span>
          <span>
            <Link to="/">الصفحة الرئيسية</Link>
          </span>
        </h2>
      </div>
    </FulscrnWrpr>
  );
};

export default Missing;
