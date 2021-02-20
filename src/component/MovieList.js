import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React from "react";
import "./MovieList.css";

function MovieList({ data }) {
  return (
    <div className="movieList">
      <div className="movieList__Content">
        <div className="movieList__ContentLeft">
          <div className="movieList__ContentTop">
            <div className="movieList__ContentLeftTop">
              <ArrowDropUp />
            </div>
            <p>{data.voted.length}</p>
            <div className="movieList__ContentLeftDown">
              <ArrowDropDown />
            </div>
          </div>
          <div className="movieList__ContentBottom">
            <p>Votes</p>
          </div>
        </div>

        <div className="movieList__ContentMiddle">
          <img src={data.poster} alt="" />
        </div>
        <div className="movieList__ContentRight">
          <div className="movieList__ContentRightInfo">
            <h4>{data.title}</h4>
            <p>
              Genre : <span>{data.genre}</span>
            </p>
            <p>
              Director : <span>{data.director}</span>
            </p>
            <p>
              Starring : <span>{data.stars}</span>
            </p>
          </div>
          <div className="movieList__ContentRightExtras">
            <p>
              <span>{data.runTime ? `${data.runTime} Mins` : "NA "}</span>|
              <span> {data.language} </span>|<span> {data.releasedDate}</span>
            </p>
          </div>
          <div className="movieList__ContentRightRest">
            <p>
              <span>{data.pageViews} views </span>|
              <span> Voted by {data.voted.length} people</span>
            </p>
          </div>
        </div>
      </div>
      <button>Watch Trailer</button>
    </div>
  );
}

export default MovieList;
