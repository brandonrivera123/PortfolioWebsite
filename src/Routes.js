import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Projects />}></Route>
    </Switch>
  );
};
