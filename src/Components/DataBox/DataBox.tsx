import classes from "./DataBox.module.scss";

type typeDataBoxProps = { title?: string; children?: JSX.Element };

const DataBox = ({ title, children }: typeDataBoxProps) => {
  return (
    <div className={classes.DataBox}>
      {title && <h4 className={classes.title}>{title}</h4>}
      <div className={classes.dataContainer}>
        {children}
      </div>
    </div>
  );
};
export default DataBox;
