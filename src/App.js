import React from "react";
import "./App.css";
import Visualizer from "./components/Visualizer";
import FavouriteArtistsGraph from "./components/FavouriteArtistsGraph";

function App() {
  const [footer, setFooter] = React.useState("");

  const callback = (footer) => {
    setFooter(footer);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>A Year In Music</h1>
        <Visualizer callback={callback}/>
        <FavouriteArtistsGraph callback={callback}/>
        <div className="footer">
          <h4>{footer}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;