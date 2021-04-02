import "./App.css";
import invertColour from "./invertColour";
import Visualizer from "./components/Visualizer";
const record = require("./record.json");

const rankArtists = () => {
  let artists = {};
  const keys = Object.keys(record);
  // Count number of albums by each artist
  keys.forEach((key, i) => {
    if (record[key].color.length > 0) {
      let artist = record[key].artist;
      if (artists[artist]) {
        artists[artist]++;
      } else {
        artists[artist] = 1;
      }
    }
  });
  return artists;
}

const makeGraph = () => {
  let data = Object.entries(rankArtists());
  let max = Math.max(...Object.values(rankArtists()))

  const sortedData = data.sort((a, b) => {
    var nameA = a[0].toUpperCase(); // ignore upper and lowercase
    var nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; // nameA comes first
    }
    if (nameA > nameB) {
      return 1; // nameB comes first
    }
    return 0; // names must be equal
  })
  sortedData.forEach((item, i) => {
    let artist = data[i][0];
    let value = data[i][1];
    data[i] =
      (
        <div
          className="bar"
          style = {{ width: `${100 / data.length}%`}}
          key={i}
        >
          <div
            className="whitespace"
            style={{ flex: max - value }}
            title={artist + ": " + value + " albums"}
            ></div>
          <div
            className="fill"
            style={{ flex: value }}
            title={artist + ": " + value + " albums"}
          ></div>
        </div>
      )
  });
  return data
}

function App() {
  // Make graph
  let Graph = makeGraph()

  return (
    <div className="App">
      <div className="container">
        <h1>A Year In Music</h1>
        <div className="visualizer">{Visualizer}</div>
        <h3>Favourite Artists</h3>
        <div className="graph">{Graph}</div>
      </div>
    </div>
  );
}

export default App;