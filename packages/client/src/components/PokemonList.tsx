import React, { useState, useEffect } from 'react';

import { Table, Tag } from 'antd';

import { useLazyQuery } from '@apollo/react-hooks';
import GET_POKEMONS from '../graphql/pokemons.graphql';
import GET_POKEMONS_BY_TYPE from '../graphql/pokemonsByType.graphql';

import { Pokemons, PokemonsVariables, Pokemons_pokemons_edges } from '../@types/generated/Pokemons';
import {
  PokemonsByType,
  PokemonsByTypeVariables,
  PokemonsByType_pokemonsByType_edges,
} from '../@types/generated/PokemonsByType';

import { Params } from '../@types/CustomTypes';

import { mapTypeToColor } from '../util/functions';

import SearchInput from './SearchInput';
import FilterInput from './FilterInput';

const limitByName = 10;

/*
  200 because there's no pagination for filtering by type.
  There shouldn't be that many results per type anyway
*/
const limitByType = 200;

const PokemonList: React.FC = () => {
  const [
    getPokemons,
    { loading: loadingPokemons, data: dataPokemons, fetchMore: fetchMorePokemons },
  ] = useLazyQuery<Pokemons, PokemonsVariables>(GET_POKEMONS);

  const [
    getPokemonsByType,
    { loading: loadingPokemonsByType, data: dataPokemonsByType },
  ] = useLazyQuery<PokemonsByType, PokemonsByTypeVariables>(GET_POKEMONS_BY_TYPE);

  const [params, setParams] = useState<Params>({
    search: '',
    filter: '',
  });

  const [isDataByName, setIsDataByName] = useState<boolean>(true);

  useEffect(() => {
    if (isDataByName) {
      getPokemons({
        variables: {
          limit: limitByName,
          q: params.search,
        },
      });
    } else {
      getPokemonsByType({
        variables: {
          limit: limitByType,
          type: params.filter,
        },
      });
    }
  }, [isDataByName, params]);

  useEffect(() => {
    /*
     Get all pokemons when both fields are empty or if search input has a value
     Both filter and search inputs should never have a value at the same time
    */
    if (!(params.filter && params.search) || params.search) {
      setIsDataByName(true);
    }

    // Get pokemons by type if filter input has a value
    if (params.filter) {
      setIsDataByName(false);
    }
  }, [params]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setParams({
      search: e.target.value,
      filter: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setParams({
      search: '',
      filter: e.target.value,
    });
  };

  const handleLoadMore = (): void => {
    fetchMorePokemons({
      variables: {
        limit: limitByName,
        q: params.search,
        /* Continue after last element.
           Can't use pop() because it modifies the array
        */
        after: dataPokemons?.pokemons?.edges?.slice(-1)[0]?.node.id,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...fetchMoreResult,
          pokemons: {
            ...fetchMoreResult.pokemons,
            edges: [...prev.pokemons.edges, ...fetchMoreResult.pokemons.edges],
          },
        };
      },
    });
  };

  return (
    <React.Fragment>
      <Table<Pokemons_pokemons_edges | PokemonsByType_pokemonsByType_edges>
        dataSource={
          isDataByName ? dataPokemons?.pokemons?.edges : dataPokemonsByType?.pokemonsByType?.edges
        }
        rowKey={({ node }) => node.id}
        bordered
        loading={isDataByName ? loadingPokemons : loadingPokemonsByType}
        pagination={false}
        scroll={{
          x: true,
          y: 500,
        }}
        className="custom-ant-table"
      >
        <Table.Column align="center" key="name" title="Name" dataIndex={['node', 'name']} />
        <Table.Column
          align="center"
          key="types"
          title="Types"
          dataIndex={['node', 'types']}
          render={(types: string[]) => (
            <React.Fragment>
              {types.map((type) => (
                <Tag color={mapTypeToColor(type)} key={type}>
                  {type.toUpperCase()}
                </Tag>
              ))}
            </React.Fragment>
          )}
        />
        <Table.Column
          align="center"
          key="classification"
          title="Classification"
          dataIndex={['node', 'classification']}
        />
      </Table>
      <div className="input-container">
        <SearchInput
          searchParams={params.search}
          handleChange={handleSearchChange}
          handleClick={handleLoadMore}
          hasNextPage={isDataByName && dataPokemons?.pokemons?.pageInfo?.hasNextPage}
        />
        <FilterInput handleChange={handleInputChange} filterParams={params.filter} />
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
