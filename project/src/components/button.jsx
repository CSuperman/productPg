import React from "react";

export default function mysteryButton({ onClick }) {
  return (
    <button onClick={onClick} type="button">
      Mystery
    </button>
  );
}
