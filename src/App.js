<<<<<<< HEAD
import "./App.css";
import { FormProvider } from "./components/form";
import MovieSearch from "./components/MovieSearch";
import MovieSort from "./components/MovieSort";
import SearchContextProvider from "./contexts/SearchContext";
import { useForm } from "react-hook-form";
import SortContextProvider from "./contexts/SortContext";

const defaultValues = {
  sortBy: "Title (A-Z)",
  searchQuery: "",
};
=======
import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
>>>>>>> main

function App() {
  const methods = useForm({ defaultValues });
  return (
<<<<<<< HEAD
    <div className="App">
      <h1>Movie Search</h1>
      <SearchContextProvider>
        <MovieSearch />
      </SearchContextProvider>
      <SortContextProvider>
        <FormProvider methods={methods}>
          <MovieSort />
        </FormProvider>
      </SortContextProvider>
    </div>
=======
    <BrowserRouter>
      <Router />
    </BrowserRouter>
>>>>>>> main
  );
}

export default App;
