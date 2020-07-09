import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql/Client';

import SearchForm from './components/SearchForm';
import Pokemons from './components/Pokemons';

import './css/App.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Pokèmons</h1>
        <Pokemons />
        <SearchForm />
        <footer>
          <a href="https://github.com/Jolsty/frontend-assignment" target="_blank" rel="noopener noreferrer">
            Find me on GitHub
          </a>
        </footer>
      </div>
    </ApolloProvider>
  );
};

export default App;
