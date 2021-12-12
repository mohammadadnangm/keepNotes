import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Addkeeper from "./components/addKeeper/addKeepr";
import Header from "./components/header/header";
import ShowKeeper from "./components/showKeeper/showKeeper";

function App() {
  const [keeperList, setKeeperList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getAll").then((res) => {
      setKeeperList(res.data);
    });
  }, []);

  return (
    <div className="App">
      {console.log("keeperList", keeperList)}
      <Header />
      <Addkeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
