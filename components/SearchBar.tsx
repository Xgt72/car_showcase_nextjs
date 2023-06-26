"use client";

import { useState, FormEvent } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = ({
  setManufacturer,
  manufacturer,
  setModel,
  model,
}: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState(manufacturer);
  const [searchModel, setSearchModel] = useState(model);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={searchManufacturer}
          setManufacturer={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
