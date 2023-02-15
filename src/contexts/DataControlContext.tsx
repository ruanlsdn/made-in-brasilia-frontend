import React, { createContext, useContext, useState } from "react";
import { iCity } from "../interfaces/iCity";
import { iPost } from "../interfaces/iPost";

type DataControlContextProps = {
  cities: iCity[];
  setCities: React.Dispatch<React.SetStateAction<iCity[]>>;
  filteredCities: iCity[];
  setFilteredCities: React.Dispatch<React.SetStateAction<iCity[]>>;
  posts: iPost[];
  setPosts: React.Dispatch<React.SetStateAction<iPost[]>>;
  filteredPosts: iPost[];
  setFilteredPosts: React.Dispatch<React.SetStateAction<iPost[]>>;
};

const DataControlContext = createContext<DataControlContextProps>({
  cities: [],
  setCities: () => {},
  filteredCities: [],
  setFilteredCities: () => {},
  posts: [],
  setPosts: () => {},
  filteredPosts: [],
  setFilteredPosts: () => {},
});

type ChildrenProps = {
  children: React.ReactNode;
};

export const DataControlProvider = ({ children }: ChildrenProps) => {
  const [cities, setCities] = useState<iCity[]>([]);
  const [filteredCities, setFilteredCities] = useState<iCity[]>([]);
  const [posts, setPosts] = useState<iPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<iPost[]>([]);

  return (
    <DataControlContext.Provider
      value={{
        cities,
        setCities,
        filteredCities,
        setFilteredCities,
        posts,
        setPosts,
        filteredPosts,
        setFilteredPosts,
      }}
    >
      {children}
    </DataControlContext.Provider>
  );
};

export const useDataControlContext = () => useContext(DataControlContext);
