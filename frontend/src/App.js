import React from "react";
import { Route, Routes } from "react-router-dom";
import {Signup, Login, Navbar, Todo, Error } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route  path="*" element={<Error />} />
      </Routes>
      {/* <Error/> */}
    </>
  );
};

export default App;
