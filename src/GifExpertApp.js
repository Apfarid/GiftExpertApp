import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Puch"]);

  const handleAdd = () => {
    setcategories([...categories, "The Big Ban theory"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {categories.map((categoria) => (
          <GifGrid category={categoria} key={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
