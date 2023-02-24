import React, { createContext, useContext, useState } from "react";
import { iCity } from "../interfaces/iCity";
import { iPost } from "../interfaces/iPost";

type DataControlContextProps = {
  cities: iCity[];
  setCities: React.Dispatch<React.SetStateAction<iCity[]>>;
  filteredCities: iCity[];
  setFilteredCities: React.Dispatch<React.SetStateAction<iCity[]>>;
  selectedCity: iCity | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<iCity | null>>;
  posts: iPost[];
  setPosts: React.Dispatch<React.SetStateAction<iPost[]>>;
  filteredPosts: iPost[];
  setFilteredPosts: React.Dispatch<React.SetStateAction<iPost[]>>;
  selectedPost: iPost | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<iPost | null>>;
};

const DataControlContext = createContext<DataControlContextProps>(null!);

type ChildrenProps = {
  children: React.ReactNode;
};

export const DataControlProvider = ({ children }: ChildrenProps) => {
  const [cities, setCities] = useState<iCity[]>([]);
  const [filteredCities, setFilteredCities] = useState<iCity[]>([]);
  const [selectedCity, setSelectedCity] = useState<iCity | null>(null);
  const [posts, setPosts] = useState<iPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<iPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<iPost | null>(null);

  return (
    <DataControlContext.Provider
      value={{
        cities,
        setCities,
        filteredCities,
        setFilteredCities,
        selectedCity,
        setSelectedCity,
        posts,
        setPosts,
        filteredPosts,
        setFilteredPosts,
        selectedPost,
        setSelectedPost,
      }}
    >
      {children}
    </DataControlContext.Provider>
  );
};

export const useDataControlContext = () => useContext(DataControlContext);
