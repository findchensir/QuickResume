import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRoutes;