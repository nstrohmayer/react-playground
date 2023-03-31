import { Models } from '@rematch/core';
import { count } from './count';
import { pokemon } from './pokemon';

export interface RootModel extends Models<RootModel> {
    count: typeof count;
    pokemon: typeof pokemon;
}

export const models: RootModel = { count, pokemon };
