import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.LoaderParent}>
      <div className={classes.Loader}>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
