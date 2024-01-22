import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        {String(dayNames[currentTime.getUTCDay()]) +
          "  " +
          String(currentTime.getDate()) +
          " / " +
          String(currentTime.getMonth() + 1) +
          " / " +
          currentTime.getFullYear()}
      </div>
      <div>
        {currentTime.getHours().toString().padStart(2, "0") +
          ":" +
          currentTime.getMinutes().toString().padStart(2, "0") +
          ":" +
          currentTime.getSeconds().toString().padStart(2, "0")}
      </div>
    </>
  );
};

export default CurrentTime;
