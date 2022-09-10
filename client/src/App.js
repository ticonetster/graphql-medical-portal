import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, InMemoryCache } from "@apollo/client";

// import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";

import "./App.css";
import LoginPatients from "./pages/LoginPatients";
import SignupPatients from "./pages/SignupPatients";
import LoginDoctors from "./pages/LoginDoctors";
import SignupDoctors from "./pages/SignupDoctors";
import DashboardPatients from "./pages/DashboardPatients"
import DashboardDoctors from "./pages/DashboardDoctors"

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="health-app">
        <Router>
          <>
            <Navbar />
              <div className="container">
                {/* <Header /> */}
                <Routes>
                  <Route path="/">
                    {/* <Route index element={<Login />} /> */}
                    <Route index element={<LoginPatients />} />
                    <Route path="doctors-dashboard" element={<DashboardDoctors />} />
                    <Route path="patients-dashboard" element={<DashboardPatients />} />
                    <Route path="signup" element={<SignupPatients />} />
                    <Route path="doctors-login" element={<LoginDoctors />} />
                    <Route path="doctors-signup" element={<SignupDoctors />} />
                    <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                  </Route>
                </Routes>
              </div>
            <Footer />
          </>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
