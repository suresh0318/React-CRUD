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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.number}</td>
                      <td className="btns">
                        <Link to={`/update/${user.id}`}>
                          <button
                            type="button"
                            className="btn btn-success mr-5"
                          >
                            Update
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => onDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Read;
