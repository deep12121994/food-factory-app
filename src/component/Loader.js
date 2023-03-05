import React from "react";
import ClipLoader from 'react-spinners/ClipLoader';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
    <ClipLoader color="#52bfd9" size={100}/>
  </div>
  

  );
}