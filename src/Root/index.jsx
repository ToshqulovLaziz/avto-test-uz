import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
const Root= () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}

export default Root;
