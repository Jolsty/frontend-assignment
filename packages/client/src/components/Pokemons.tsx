import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import QUERY from '../graphql/pokemons.graphql';

import { Edge, Pokemon, Connection } from '../@types/types';

import Loading from '../components/Loading';

const Pokemons: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY);

	if (error) {
		return <div>Something strange happened</div>;
	}

	if (loading) {
		return <Loading />;
	}

	// const {
	// 	pokemons: { edges }: {edges: Connection<Pokemon>},
	// } = data;

	// fix type edges
	// importare i tipi di graph come interface

	// da fare grid
	return (
		<ul>
			{/* {edges.map(({ node: { name } }: Edge<Pokemon>) => (
				<li key={name}>{name}</li>
			))} */}
		</ul>
	);
};

export default Pokemons;
