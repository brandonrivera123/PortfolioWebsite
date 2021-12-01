import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Switch>
  );
};
