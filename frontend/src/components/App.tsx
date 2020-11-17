import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Dashboard from "./Dashboard";


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
