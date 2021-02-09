import React, { useEffect, useMemo, useState } from "react";
import classes from "./CurrentTime.module.css";

function CurrentTime() {
  const [time, setTime] = useState(new Date())

  const timer = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  useEffect(() => {
    let isMounted = true;
    if(isMounted) {
      timer();
    }
    return ()=> {isMounted = false}
  },[]);

  return (
    <div className={classes.CurrentTime}>
      <h5>
        Станом на {time.toLocaleDateString()} {time.toLocaleTimeString()} .
      </h5>
    </div>
  );
}

export default CurrentTime;
