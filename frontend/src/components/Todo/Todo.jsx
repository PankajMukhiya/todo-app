import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItems, removeItems } from "../../Redux/Actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div className="container pt-5 mt-2 d-flex justify-content-center align-items-center">
        <div className="row p-5 ">
          {/* To do heading */}
          <div className="col-12 mb-4">
            <h2 className="text-center text-decoration-underline">
              Add Your List Here 🔖
            </h2>
          </div>
          {/* input items fields */}
          <div className="col-10 col-md-7 mx-auto d-flex">
            <input
              type="text"
              placeholder="✍️ write Add Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="form-control "
            />
            <button
              onClick={() => {
                if (inputData === "") {
                  alert("Input Field is Blanks..., Please write the Notes !");
                } else {
                  dispatch(addItems(inputData, setInputData("")));
                }
              }}
              className="btn btn-light btn-outline-success ms-2"
            >
              <i className="fa fa-plus" title="Add Item"></i>
            </button>
          </div>

          {/* LISTING ALL ADDED ITEMS */}
          <div className="row">
            {/* listed items */}
            {list.map((elements) => {
              const { id, data } = elements;
              return (
                <div
                  key={id}
                  className="col-10 col-md-7 mx-auto d-flex mt-3 border justify-content-between align-items-center"
                >
                  <h4 className="">✍️ {data}</h4>
                  <button
                    onClick={() => dispatch(deleteItems(id))}
                    className="btn btn-light btn-outline-danger border-0 "
                  >
                    <i className="far fa-trash-alt" title="Delete Item"></i>
                  </button>
                </div>
              );
            })}
          </div>
          {/* checklist items */}
          <div className="col-10 col-md-7 mx-auto d-flex mt-3 justify-content-center  align-items-center">
            <button
              onClick={() => dispatch(removeItems())}
              className="btn btn-light btn-outline-danger  w-75 rounder-pills "
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
