import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/Client';

import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';

import './css/styles.css';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Header />
    <PokemonList />
    <Footer />
  </ApolloProvider>
);
export default App;
