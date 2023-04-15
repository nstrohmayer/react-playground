import React from "react"

const Home: React.FC = () => {
  return (
    <div>
      <p>Welcome to DBD Utils</p>
      <a href={"/counter"}>Counter</a>
      <h2>Pokemon</h2>
      <a href={"/pokemon"}>Pokemon</a>
      <a href={"/pokemonWithStore"}>Pokemon with store</a>
      <h2>Dead By Daylight</h2>
      <a href={"/dead-by-daylight/perks"}>DBD Perks</a>
    </div>
  )
}

export default Home
