import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Counter from './views/counter/Counter';
import ErrorPage from './error-page';
import Home from './views/home/Home';
import Pokemon from './views/pokemon/Pokemon';
import PokemonWithStore from './views/pokemon/Pokemon_withStore';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    }, {
        path: '/counter',
        element: <Counter />,
    }, {
        path: '/pokemon',
        element: <Pokemon />,
    }, {
        path: '/pokemonWithStore',
        element: <PokemonWithStore />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={ router } />
            <CustomComponent1 onSubmit={handleFormFinished}></CustomComponent1>
            <SecondPage></SecondPage>
        </div>
    );
}

export default App;
