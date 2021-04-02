import invertColour from "../invertColour";
const record = require("../record.json");

let Visualizer = [];
const keys = Object.keys(record);

keys.forEach((key, i) => {
  if (record[key].color.length > 0) {
    Visualizer.push(
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

export default Visualizer;