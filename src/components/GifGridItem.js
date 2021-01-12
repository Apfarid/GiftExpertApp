import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInTopRight">
      <img src={url} alt="Title" />
      <p> {title}</p>
    </div>
  );
};

export default GifGridItem;
