// components/DataContext.js
"use client"; // if you're on Next.js App Router and using hooks

import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const DataContext = createContext();

// 2. Create a provider component
export function DataProvider({ children, initialData }) {
  const [data, setData] = useState(initialData || []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// 3. Custom hook for easy access
export function useData() {
  return useContext(DataContext);
}
