import React from "react";
import "./card.scss";
const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className={"card " + item.types[0].type.name}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h3>{item.id}</h3>
                <img src={item.sprites.front_default} alt="" height={100} />
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
