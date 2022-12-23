import React from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../slices/userSlice";

export default function ChangeName() {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Enter name"
      onChange={(e) => dispatch(changeName(e.target.value))}
    />
  );
}
