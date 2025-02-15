import React from "react";
import { useAlert } from "../context/AlertContext";

export default function Alert() {
  const { alertMessage } = useAlert();

  if (!alertMessage) return null;

  return (
    <div className="alert">
      <p>{alertMessage}</p>
    </div>
  );
}
