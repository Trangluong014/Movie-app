import React, { useEffect, useState } from "react";
import tmdbApi from "../app/tmdbApi";
import useData from "../hooks/useData";

const FilterGenres = () => {
  const [genres, setGenres] = useState();
  let { filter: filterInput, setFilter: setFilterInput } = useData();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tmdbApi.getMovieGenres();
        setGenres(response.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {genres?.map(({ name, id }) => (
        <button key={id} value={filterInput} onClick={() => setFilterInput(id)}>
          {name}
        </button>
      ))}
      <button
        key="clear-filter"
        value="clear-filter"
        onClick={() => setFilterInput("")}
      >
        All Genres
      </button>
    </div>
  );
};

export default FilterGenres;
