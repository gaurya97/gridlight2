import "./styles.css";
// style={{ gridTemplateColumns: "repeat(`3`,1fr)" }}
export default function App() {
  const Cell = ({ clicked }) => {
    return <div className="cell"></div>;
  };

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  return (
    <div className="App">
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((Element) => {
          if (Element) {
            return <Cell />;
          } else {
            return <span></span>;
          }
        })}
      </div>
    </div>
  );
}
