import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import NavBar from "./components/NavBar";
import Home from "../components/Home";

function (){
    return (
        <div>
        <NavBar/>    
        <About/>
        <Home/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
