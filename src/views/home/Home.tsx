import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div>
      <p>Welcome to DBD Utils</p>
      <Link to={"/counter"}>Counter</Link>
      <h2>Pokemon</h2>
      <Link to={"/pokemon"}>Pokemon</Link>
      <Link to={"/pokemonWithStore"}>Pokemon with store</Link>
      <h2>Dead By Daylight</h2>
      <Link to={"/dead-by-daylight/perks"}>DBD Perks</Link>
    </div>
  )
}

export default Home
