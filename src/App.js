import "./App.css";
import Visualizer from "./components/Visualizer";
import FavouriteArtistsGraph from "./components/FavouriteArtistsGraph";
const record = require("./record.json");



function App() {
  // Make graph
  // let Graph = makeGraph()

  // <div className="graph">{Graph}</div>
  return (
    <div className="App">
      <div className="container">
        <h1>A Year In Music</h1>
        {Visualizer}
        <h3>Favourite Artists</h3>
        {FavouriteArtistsGraph}
      </div>
    </div>
  );
}

export default App;