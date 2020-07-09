/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pokemons
// ====================================================

export interface Pokemons_pokemons_edges_node {
  __typename: 'Pokemon';
  id: string;
  name: string;
  types: string[];
  classification: string;
}

export interface Pokemons_pokemons_edges {
  __typename: 'PokemonEdge';
  node: Pokemons_pokemons_edges_node;
}

export interface Pokemons_pokemons {
  __typename: 'PokemonsConnection';
  edges: Pokemons_pokemons_edges[];
}

export interface Pokemons {
  pokemons: Pokemons_pokemons;
}

export interface PokemonsVariables {
  limit?: number;
}
