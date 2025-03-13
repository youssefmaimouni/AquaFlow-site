import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NeuralNetworksAI from "./pages/NeuralNetworksAI";
import './style.css';
import DefaultLayout from "./layout/DefaultLayout";
import Test from "./pages/Test";
import "./App.css"
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  return (
    <Router basename="/AquaFlow-site"> 
      <Routes>
        {/* Public Route without Layout */}
        <Route path="/" element={<Home />} />
        <Route path="/AquaFlow-site/#/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route
          path="/AquaFlow-site/dashboard"
          element={
            <ProtectedRoute>
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;