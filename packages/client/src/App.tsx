import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql/Client';

import { Button } from 'antd';

import Pokemons from './components/Pokemons';

import './css/App.css';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<div className='app'>
				<Pokemons />
			</div>
		</ApolloProvider>
	);
};

export default App;
