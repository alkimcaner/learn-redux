import React from "react";
import "./Component.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Component1() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="component">
      <p>Component 1</p>
      <p className="count">Count: {count}</p>
    </div>
  );
}
