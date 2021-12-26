import classes from "./FulscrnWrpr.module.scss";
import type { typeFulscrnWrpr } from "../../Types";

const FulscrnWrpr = ({
  children,
  className,
  containerClassName,
  style,
}: typeFulscrnWrpr) => {
  return (
    <div className={[classes.FulscrnWrpr, className].join(" ")} style={style}>
      <div className={[classes.container, containerClassName].join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default FulscrnWrpr;
