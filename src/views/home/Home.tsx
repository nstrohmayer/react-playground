import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <p>Welcome to DBD Utils</p>
            <a href={`/counter`}>Counter</a>
            <a href={`/pokemon`}>Pokemon</a>
            <a href={`/pokemonWithStore`}>Pokemon with store</a>
            <a href={`/dead-by-daylight/maps`}>DBD Maps</a>
        </div>
    );
};

export default Home;
