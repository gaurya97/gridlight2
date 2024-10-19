import { useState, useEffect } from "react";
import "./styles.css";
// style={{ gridTemplateColumns: "repeat(`3`,1fr)" }}
export default function App() {
  const [trackId, setTrackId] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const Cell = ({ clicked, id, isActivated }) => {
    return (
      <div
        onClick={() => {
          clicked(id, isActivated);
        }}
        className={isActivated ? "cell active" : "cell"}
      ></div>
    );
  };
  useEffect(() => {
    // if (config.flat(1).filter(Boolean).length == trackId.length) {
    //   deactivateCell(trackId);
    //   console.log("deactiate");
    // }
    console.log(trackId);
  }, [trackId]);

  const deactivateCell = (list) => {
    let timer = setInterval(() => {
      console.log(list);
      list.pop();
      setTrackId(list);
      if (list.length == 0) {
        clearInterval(timer);
      }
    }, 300);
  };

  const handleClicked = (index, isActivated) => {
    if (isActivated) {
      let copyId = trackId.filter((e) => e != index);
      setTrackId(copyId);
    } else {
      setTrackId([...trackId, index]);
    }
    if (config.flat(1).filter(Boolean).length == trackId.length + 1) {
      deactivateCell(trackId);
      console.log("deactiate");
    }
    // console.log(updatedTrackId);
  };

  return (
    <div className="App">
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((Element, index) => {
          if (Element) {
            return (
              <Cell
                key={index}
                isActivated={trackId.includes(index)}
                id={index}
                clicked={handleClicked}
              />
            );
          } else {
            return <span></span>;
          }
        })}
      </div>
    </div>
  );
}
