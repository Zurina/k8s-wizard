import React from "react";
import "./styles.scss";
import Wizard from "./wizard";
import Header from "./components/header";

export default function App() {
  return (
    <div>
      <Header />
      <Wizard />
    </div>
  );
}
