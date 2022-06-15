import React from "react";
import Temprature from "./component/Temprature";
import { Route, Routes } from "react-router-dom";
import  Navbar  from "./component/Navbar";
import ShoppingList from "./component/ShoppingList";
import QuizApp from "./component/QuizApp";
import BasicForm from "./component/BasicForm";
import './app.css'

const App = () => {
  return (
    <div className="bigWrap">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/shoppinglist" element={<Navbar />} />
        <Route path="/quiz_app" element={<Navbar />} />
        <Route path="/basicform" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Temprature />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/quiz_app" element={<QuizApp />} />
        <Route path="/basicform" element={<BasicForm />} />
        <Route path="*" element={<h3>not found</h3>} />
      </Routes>
    </div>
  );
};

export default App;
