import React from 'react';

import { Table, Tag } from 'antd';

import { useQuery } from '@apollo/react-hooks';
import QUERY from '../graphql/pokemons.graphql';

import { Pokemons, PokemonsVariables, Pokemons_pokemons_edges } from '../@types/generated/Pokemons';

import { mapTypeToColor } from '../util/functions';

const Pokemons: React.FC = () => {
  const { loading, error, data } = useQuery<Pokemons, PokemonsVariables>(QUERY, {
    variables: {
      limit: 50,
    },
  });

  if (error) {
    return <div>Something strange happened</div>;
  }

  if (!loading && !data) {
    return <div>Something happened to the data</div>;
  }

  return (
    <Table<Pokemons_pokemons_edges>
      dataSource={data?.pokemons?.edges}
      rowKey="id"
      bordered
      loading={loading}
      pagination={{ position: ['bottomCenter'], pageSize: 10 }}
      className="custom-ant-table"
    >
      <Table.Column<Pokemons_pokemons_edges>
        key="name"
        title="Name"
        dataIndex={['node', 'name']}
        render={(name) => <span className="pokemon-name">{name}</span>}
      />
      <Table.Column<Pokemons_pokemons_edges>
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
        key="classification"
        title="Classification"
        dataIndex={['node', 'classification']}
      />
    </Table>
  );
};

export default Pokemons;
