import { IResolvers } from 'graphql-tools';
import * as pokemons from './models/pokemons';

export const resolvers: IResolvers = {
	Query: {
		pokemons: (_source, args) => pokemons.pokemonsByName(args),
		pokemonsByType: (_source, args) => pokemons.pokemonsByType(args),
	},
};
