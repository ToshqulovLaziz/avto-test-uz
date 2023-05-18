import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import EasyPage from "../pages/Easy";
import MediumPage from "../pages/Medium";
import HardPage from "../pages/Hard";
const Root= () => {
  return (
    <Fragment>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/easy" element={<EasyPage />} />
          <Route path="/medium" element={<MediumPage />} />
          <Route path="/hard" element={<HardPage />} />
        </Routes>
    </Fragment>
  );
}

export default Root;
