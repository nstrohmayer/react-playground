import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Counter from './views/counter/Counter';
import ErrorPage from './error-page';
import Home from './views/home/Home';
import Pokemon from './views/pokemon/Pokemon';
import PokemonWithStore from './views/pokemon/Pokemon_withStore';
import MapsComponent from "./views/deadByDaylight/MapsComponent";
import PerkOverview from "./views/deadByDaylight/perks/PerkOverview"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>,
    }, {
        path: '/counter',
        element: <Counter/>,
    }, {
        path: '/pokemon',
        element: <Pokemon/>,
    }, {
        path: '/pokemonWithStore',
        element: <PokemonWithStore/>,
    }, {
        path: '/dead-by-daylight/maps',
        element: <MapsComponent/>
    },
    {
        path: "/dead-by-daylight/perks",
        element: <PerkOverview />,
    },

]);

function App(): React.JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
