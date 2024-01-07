import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://656ae3dfdac3630cf72765c1.mockapi.io/User", inputData)
      .then((res) => {
        alert("Data Posted Successfully!");
        navigate("/");
      });
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="col-2 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
            </div>
            <br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    );
  };
}

export default Create;
