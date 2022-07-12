import { NextUIProvider } from "@nextui-org/react";
import "./style/App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";


const Home = lazy(() => import("./components/Home"));
const Tarefas = lazy(() => import("./components/Tarefas"));

function App() {
  
  return (
    <NextUIProvider>
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/Tarefas" element={<Tarefas />}>
              Tarefas
            </Route>
          </Routes>
        </Suspense>
      </Router>
      
    
    </NextUIProvider>
  );
}
export default App;
