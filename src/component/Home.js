import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import axios from "axios";
import "./Home.css";
import { ArrowDropUp, ArrowUpward } from "@material-ui/icons";
import MovieList from "./MovieList";
import Header from "./Header";

function Home() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .post("https://hoblist.com/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setResponseData(response.data.result);
      })
      .catch((e) => console.log(e.message));
  }, []);

  console.log(responseData);

  return (
    <div className="home">
      <Header />
      <div className="home__contents">
        {responseData.map((responseData) => (
          <MovieList data={responseData} />
        ))}
        {/* <MovieList />
        <MovieList />
        <MovieList />
        <MovieList /> */}
      </div>
    </div>
  );
}

export default Home;
