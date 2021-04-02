import "./App.css";
import invertColour from "./invertColour";
const record = require("./record.json");

function App() {
  let visualizer = [];
  const keys = Object.keys(record);

  keys.forEach((key, i) => {
    if (record[key].color.length > 0) {
      visualizer.push(
        <div
          className="block"
          id={record[key].color}
          title={`${key}: ${record[key].album} - ${record[key].artist}`}
          style={{backgroundColor: record[key].color}}
          key={i}
        >
          <div
            className="blockText"
            style={{color: invertColour(record[key].color, true)}}
          >
            {`${key}: ${record[key].album} - ${record[key].artist}`}
          </div>
        </div>
      );
    }
  });

  return (
    <div className="App">
      <div className="container">
        <div className="visualizer">
          <h1>A Year In Music</h1>
          {visualizer}
        </div>
      </div>
    </div>
  );
}

export default App;
