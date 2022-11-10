import React from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Movies from "./components/Movies";
import { CssBaseline } from "@mui/material";
import Users from "./components/Users";
import { Container } from "@mui/system";
import StoreProvider from "./core/store";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <CssBaseline />
        <Container maxWidth="xl">
          <main style={{ marginBottom: "100px" }}>Hello zakaria </main>
          {/* <Movies /> */}
          <Users />
        </Container>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
