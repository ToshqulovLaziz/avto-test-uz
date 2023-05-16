import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
const Root= () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}

export default Root;
