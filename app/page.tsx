"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: searchManufacturer,
        model: searchModel,
        year,
        fuel,
        limit,
      });
      setAllCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, searchManufacturer, searchModel]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar
            setManufacturer={setSearchManufacturer}
            manufacturer={searchManufacturer}
            setModel={setSearchModel}
            model={searchModel}
          />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps, index: number) => (
                <CarCard key={`${index}-${car.make}-${car.model}`} car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl fonnt-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
