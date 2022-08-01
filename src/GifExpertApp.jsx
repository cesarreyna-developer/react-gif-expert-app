import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Twice"]);

  // console.log(setCategories);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
    // console.log(categories);
  };

  return (
    <> 
      <h1>GifExpertApp n</h1> 
      <AddCategory onNewCategory={(newValue) => onAddCategory(newValue)} />
      
      {
      categories.map(category => ( <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};

// yDRJwZqKQQ7qoG5si9VMtD32X9MVOjpG
