import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import Ourproduct from "./components/Ourproduct";
import Footer from "./components/Footer";

import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-slate-950"></body>
      <Nav/>
      <Header/>
      <Content/>
      <Ourproduct/>
      <Footer/>
    </>
  );
}

export default App;
