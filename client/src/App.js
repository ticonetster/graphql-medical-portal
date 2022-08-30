import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Login from "./components/Login";

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
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/test/" element={<placeholder />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
