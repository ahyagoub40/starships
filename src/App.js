import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomAppBar from './Components/app-bar';
import StarshipList from './Container/starships-lists';
import StarshipDetails from './Container/starships-details';
import PilotDetails from './Container/pilot-details';
import MovieDetails from './Container/movie-details';
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
        <Switch>
          <Route path="/" exact component={StarshipList} />
          <Route path="/starship-details/:id" component={StarshipDetails} />
          <Route path="/movie-details/:id" component={MovieDetails} />
          <Route path="/pilot-details/:id" component={PilotDetails} />
        </Switch>
      </BrowserRouter>
    </div>
    // </ApolloProvider>
  );
}

export default App;
