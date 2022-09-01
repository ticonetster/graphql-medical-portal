import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="health-app">
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Login />} />
                <Route path="home" element={<Home />}></Route>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
