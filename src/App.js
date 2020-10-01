import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomAppBar from './Components/app-bar';
import StarshipList from './Container/starships-lists';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

// const client = new ApolloClient({
// uri: "https://cors-anywhere.herokuapp.com/graphql.org/swapi-graphql/",
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className="App">
      <BrowserRouter>
        <CustomAppBar />
        <StarshipList />
      </BrowserRouter>
    </div>
    // </ApolloProvider>
  );
}

export default App;
