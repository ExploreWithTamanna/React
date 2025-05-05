import React from "react";
import "./index.css";
import Card from "./components/Card"
import CounterApp from "./components/CounterApp";
import Toggle from "./components/Toggle";
import DataFetchGridCard from "./components/DataFetchGridCard";

function App() {
  return (
   <>
   <DataFetchGridCard/>
   <Toggle/>
   <CounterApp/>
    <Card title="Apple Watch" price="$999.99"/>;
    {/* <Card title="Samsung Watch" price="$699.99"/>;
    <Card title="Xiaomi Watch" price="$399.99"/>; */}
   </>
  );
}

export default App;
