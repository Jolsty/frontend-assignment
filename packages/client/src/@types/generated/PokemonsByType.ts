/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonsByType
// ====================================================

export interface PokemonsByType_pokemonsByType_pageInfo {
  __typename: 'PageInfo';
  hasNextPage: boolean;
}

export interface PokemonsByType_pokemonsByType_edges_node {
  __typename: 'Pokemon';
  id: string;
  name: string;
  types: string[];
  classification: string;
}

export interface PokemonsByType_pokemonsByType_edges {
  __typename: 'PokemonEdge';
  node: PokemonsByType_pokemonsByType_edges_node;
}

export interface PokemonsByType_pokemonsByType {
  __typename: 'PokemonsConnection';
  pageInfo: PokemonsByType_pokemonsByType_pageInfo;
  edges: PokemonsByType_pokemonsByType_edges[];
}

export interface PokemonsByType {
  pokemonsByType: PokemonsByType_pokemonsByType;
}

export interface PokemonsByTypeVariables {
  limit?: number;
  type?: string;
  after?: string;
}
