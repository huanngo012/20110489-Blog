import React, { createContext, useEffect, useState } from "react";
import { blog } from "../assets/data/data";
export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(blog);

  useEffect(() => {
    const blogsLocalStorage = JSON.parse(localStorage.getItem("blogs"));
    if (blogsLocalStorage) {
      setBlogs(blogsLocalStorage);
    }
  }, []);

  return (
    <DataContext.Provider value={[blogs, setBlogs]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
