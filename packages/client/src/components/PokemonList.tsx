import React, { useState, useEffect } from 'react';

import { Table, Tag } from 'antd';

import { useLazyQuery } from '@apollo/react-hooks';
import QUERY from '../graphql/pokemons.graphql';

import { Pokemons, PokemonsVariables, Pokemons_pokemons_edges } from '../@types/generated/Pokemons';

import { mapTypeToColor } from '../util/functions';

import SearchInput from './SearchInput';

const limit = 5;

const PokemonList: React.FC = () => {
  const [getPokemons, { loading, data, fetchMore }] = useLazyQuery<Pokemons, PokemonsVariables>(
    QUERY,
  );
  const [searchParams, setSearchParams] = useState<string>('');

  useEffect(() => {
    getPokemons({
      variables: {
        limit,
        q: searchParams,
      },
    });
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParams(e.target.value);
  };

  const handleClick = (): void => {
    fetchMore({
      variables: {
        limit,
        q: searchParams,
        /* Continue after last element. 
           Can't use pop() because it modifies the array
        */
        after: data?.pokemons?.edges?.slice(-1)[0]?.node.id,
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
      <Table<Pokemons_pokemons_edges>
        dataSource={data?.pokemons?.edges}
        rowKey={({ node }) => node.id}
        bordered
        loading={loading}
        pagination={false}
        scroll={{
          x: true,
          y: 500,
        }}
        className="custom-ant-table"
      >
        <Table.Column<Pokemons_pokemons_edges>
          align="center"
          key="name"
          title="Name"
          dataIndex={['node', 'name']}
        />
        <Table.Column<Pokemons_pokemons_edges>
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
        <Table.Column<Pokemons_pokemons_edges>
          align="center"
          key="classification"
          title="Classification"
          dataIndex={['node', 'classification']}
        />
      </Table>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
        hasNextPage={data?.pokemons?.pageInfo?.hasNextPage}
      />
    </React.Fragment>
  );
};

export default PokemonList;
