import React from "react";
import { HashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AnimatedRoutes from "./AnimatedRoutes";
import "../styles/components/App.scss";


function App() {
  return (
    <HashRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
