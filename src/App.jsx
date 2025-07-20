import { useState } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Content from "./components/content";
import Ourproduct from "./components/ourproduct";
import Footer from "./components/footer";

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
