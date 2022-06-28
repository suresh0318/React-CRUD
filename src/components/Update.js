import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

const Update = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  

  useEffect(() => {
    axios
      .get(`https://620139a8fdf5090017249902.mockapi.io/data/${id}`)
      .then((res) => {
        setName(res.data.name);
        setNumber(res.data.number);
        console.log(res.data);
        
      });
  }, [id]);

  const updateData = () => {
    axios.put(`https://620139a8fdf5090017249902.mockapi.io/data/${id}`, {
      id,
      name,
      number,
    });
  };

  return (
    <div>
      <form className="form-style">
        <h2>Update</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={number}
            placeholder="mobile"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></input>
        </div>

        <Link to="/">
          <button
            type="button"
            className="btn btn-dark"
            onClick={updateData}
          >
            Update
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
