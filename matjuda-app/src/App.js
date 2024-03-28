import React from "react";
import MenuCard from "./components/MenuCard/MenuCard";
import data from './data/dataCleaning'

function App() {
  return (
    <div>
      <MenuCard menu={data.corner1} />

    </div>
  );
}

export default App;
