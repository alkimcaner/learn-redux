import React from "react";
import "./Component.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Component1() {
  const countState = useSelector((state: RootState) => state.counter);
  const userState = useSelector((state: RootState) => state.user);

  return (
    <div className="component">
      <p>Component 2</p>
      <p className="count">Count: {countState.value}</p>
      <p>Name: {userState.name}</p>
    </div>
  );
}
