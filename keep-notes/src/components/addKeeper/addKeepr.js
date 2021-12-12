import axios from "axios";
import React, { useState } from "react";
import "./addKeeper.css";

const Addkeeper = ({ setKeeperList }) => {
  const [keeperObj, setkeeperObj] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setkeeperObj({
      ...keeperObj,
      [name]: value,
    });
  };

  const add = () => {
    if (keeperObj.title) {
      axios
        .post("http://localhost:3001/api/addNew", keeperObj)
        .then((res) => setKeeperList(res.data));
    }
  };

  return (
    <div className="addKeeper">
      <input
        className="inputBox titleInput"
        type="text"
        name="title"
        autoComplete="off"
        placeholder="title"
        onChange={handleChange}
        value={keeperObj.title}
      />
      <textarea
        className="inputBox"
        name="description"
        placeholder="add Description here"
        onChange={handleChange}
        value={keeperObj.description}
      />
      <div className="addButton" onClick={add}>
        Add
      </div>
    </div>
  );
};

export default Addkeeper;
