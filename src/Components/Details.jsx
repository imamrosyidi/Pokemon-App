import React from "react";
import "./details.scss";
import Statistic from "./Statistic";

function Details({ data }) {
  return (
    <div className="detailsContainer">
      {data && (
        <>
          <div className="title">{data.name}</div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="statistic">
            <Statistic stats={data.stats}></Statistic>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
