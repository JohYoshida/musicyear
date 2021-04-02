import "./App.css";
import Visualizer from "./components/Visualizer";
import FavouriteArtistsGraph from "./components/FavouriteArtistsGraph";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>A Year In Music</h1>
        <Visualizer />
        <FavouriteArtistsGraph />
      </div>
    </div>
  );
}

export default App;