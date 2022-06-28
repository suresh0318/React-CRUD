import React from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Read = ({ data, loading, getData }) => {
  const onDelete = (id) => {
    axios
      .delete(`https://620139a8fdf5090017249902.mockapi.io/data/${id}`)
      .then(() => {
        getData();
      });
  };
  if (loading) {
    return <Loader />;
  } else
    return (
      <div>
        {data.map((user) => {
          return (
            <ul
              className="list-group list-group-flush list-style"
              key={user.id}
            >
              <li className="list-group-item list-items">
                <h3>{user.name}</h3>
                <h3>{user.number}</h3>
                <Link to={`/update/${user.id}`}>
                  <button className="btn btn-success btns ml-2">update</button>
                </Link>
                <button
                  className="btn btn-danger btns"
                  onClick={() => onDelete(user.id)}
                >
                  delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    );
};

export default Read;
