import React, { useState, useEffect } from "react";
import Read from "../components/Read";
import axios from "axios";
import "../App.css";

const Create = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("https://620139a8fdf5090017249902.mockapi.io/data")
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const submitData = (e) => {
    setLoading(true);
    e.preventDefault();
   
    if (name.length < 3) {
      window.alert("minimum 3 characters");
      setLoading(false);
    } else if (isNaN(number)) {
      window.alert("enter numberic only");
      setLoading(false);
    } else if (number.length !== 10) {
      window.alert("enter 10 digit number");
      setLoading(false);
    } else {
      axios
        .post(`https://620139a8fdf5090017249902.mockapi.io/data`, {
          name,
          number,
        })
        .then(() => {
          getData();
          setLoading(false);
          setName("")
          setNumber("")
        });
    }
  };
  return (
    <div className="container">
        <form className="form-style">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
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
              type="number"
              className="form-control"
              id="mobile"
              placeholder="mobile"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></input>
          </div>
          {!loading && (
            <button type="submit" className="btn btn-dark" onClick={submitData}>
              Submit
            </button>
          )}
        </form>
      

      <Read data={data} loading={loading} getData={getData} />
    </div>
  );
};

export default Create;
